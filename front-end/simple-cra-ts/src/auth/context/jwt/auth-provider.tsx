import React, { useEffect, useReducer, useCallback, useMemo } from 'react';
// utils
import axios, { endpoints } from 'src/utils/axios';
//
import { AuthContext } from './auth-context';
import { ActionMapType, AuthStateType, AuthUserType } from '../../types';
import {Swagger} from "../../../utils/API";
import { removeAccessToken, setAccessToken, getAccessToken } from 'src/utils/auth';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

enum Types {
  INITIAL = 'INITIAL',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}

type Payload = {
  [Types.INITIAL]: {
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  user: null,
  loading: true,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------


type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 초기값
  const initialize = useCallback(async () => {
    console.log('initialize 실행');
    try {
      // 토큰 값 가져오기
      const accessToken = getAccessToken();

      if (accessToken) {
        // 토큰 담기
        setAccessToken(accessToken);

        // 유저 정보 불러오기
        const responseMe = await axios.get(endpoints.auth.me);
        // const responseMe = await Swagger.api.userMe();
        const user = responseMe.data;
        dispatch({
          type: Types.INITIAL,
          payload: {
            user,
          },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email: string, password: string) => {
    try {
      const data = {
        email,
        password,
      };
      const response = await axios.post(endpoints.auth.login, data);
      // const response = await Swagger.api.userLogin({
      //   email,
      //   password
      // })
      try {
        // 토큰 담기
        const {access_token} = response.data;
        setAccessToken(access_token);

        // 유저 정보 불러오기
        // const responseMe = await Swagger.api.userMe();
        const responseMe = await axios.get(endpoints.auth.me);
        const user = responseMe.data;
        console.log(user, "user");

        dispatch({
          type: Types.LOGIN,
          payload: {
            user,
          },
        });
      } catch (e) {
        console.error(e, 'LOGIN 1');
      }
    } catch (e) {
      console.error(e, 'LOGIN 2');
    }
  }, []);

  /**
   * 유저 정보 불러오기
   */
  const userInfo = useCallback(async () => {
    console.log('유저 정보 불러오기');
    // const responseMe = await Swagger.api.userMe();
    const responseMe = await axios.get(endpoints.auth.me);
    const user = responseMe.data;
    dispatch({
      type: Types.LOGIN,
      payload: {
        user,
      },
    });
  }, []);

  // REGISTER
  const register = useCallback(
    async (email: string, password: string, firstName: string, lastName: string) => {
  // const register = useCallback(async (userJoin) => {
    try {
      const data = {
        email,
        password,
        firstName,
        lastName,
      };
      const response = await axios.post(endpoints.auth.register, data);
      // const response = await Swagger.api.userJoin({
      //   email: userJoin.email,
      //   password: userJoin.password,
      //   fullName: userJoin.fullName,
      //   mobile: userJoin.mobile,
      //   termsAgree: userJoin.termsAgree,
      // });

      const { access_token, user } = response.data;
      console.log('response.data', response.data);
      // 토큰 담기
      setAccessToken(access_token);

      dispatch({
        type: Types.REGISTER,
        payload: {
          user,
        },
      });
    } catch (e) {
      console.error(e, 'REGISTER ERROR');
    }
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    // 토큰 삭제
    removeAccessToken();
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
      register,
      logout,
    }),
    [login, logout, register, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
