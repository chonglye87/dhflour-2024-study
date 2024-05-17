import Cookies from 'js-cookie';
// eslint-disable-next-line import/no-cycle
import {Axios} from "./API";
// ----------------------------------------------------------------------

// get token
export function getAccessToken() {
  return Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME as string);
}

export function getRefreshToken() {
  return Cookies.get(process.env.REACT_APP_REFRESH_TOKEN_NAME as string);
}

// 토큰 설정
export function setAccessToken(accessToken: string | null) {
  if (accessToken) {
    Cookies.set(
      process.env.REACT_APP_ACCESS_TOKEN_NAME as string,
      accessToken,
    );

    Axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    removeAccessToken();
    delete Axios.defaults.headers.common.Authorization;
  }
}

export function setRefreshToken(refreshToken: string | null) {
  if (refreshToken) {
    // refreshToken 유효기간 끝나면 토큰 삭제하기
    const tokenExpired = isTokenExpired(refreshToken);
    if (tokenExpired) {
      removeAccessToken();
      removeRefreshToken();
    } else {
      Cookies.set(
        process.env.REACT_APP_REFRESH_TOKEN_NAME as string,
        refreshToken,
      );
    }
  } else {
    removeRefreshToken();
  }
}

// 토큰 제거
export function removeAccessToken() {
  Cookies.remove(process.env.REACT_APP_ACCESS_TOKEN_NAME as string, {
    path: '/',
  });
}

export function removeRefreshToken() {
  Cookies.remove(process.env.REACT_APP_REFRESH_TOKEN_NAME  as string, {
    path: '/',
  });
}

// 토큰 기간 확인
export function isTokenExpired(token: string) {
  try {
    const decodedToken = atob(token.split('.')[1]);
    const tokenData = JSON.parse(decodedToken);
    if (!tokenData || !tokenData.exp) {
      return true;
    }

    const currentTime = Math.floor(Date.now() / 1000)
    return tokenData.exp < currentTime;
  } catch (error) {
    return true;
  }
}

