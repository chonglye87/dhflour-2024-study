// @mui
import { Button, Stack } from '@mui/material';
// components
import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import React from 'react';
import IconButton from "@mui/material/IconButton";
// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  /**
   * 구글 로그인
   */
  const googleLogin = () => {
    try {
      console.log('구글 로그인')
      // const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
      // const redirectUri =
        // window.location.origin + paths.auth.callback.googleCallback;
      // console.log('redirectUri', redirectUri);
      // window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&response_type=code&scope=profile email&redirect_uri=${redirectUri}`;
    } catch (err) {
      console.log('구글로그인 err', err);
    }
  };
  /**
   * 카카오톡 로그인
   */
  const kakaoLogin = () => {
    try {
      console.log('카카오톡 로그인')

      // const APIKey = process.env.REACT_APP_KAKAO_REST_API_KEY;
      // const redirectUri =
        // window.location.origin + paths.auth.callback.kakaoCallback;
      // window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${APIKey}&redirect_uri=${redirectUri}`;
    } catch (err) {
      console.log('카카오 로그인 err', err);
    }
  };
  return (
    <Stack direction="row" justifyContent='center' spacing={2}>
      {/* 구글 로그인 버튼 */}
      <IconButton
        onClick={googleLogin}
        sx={{
          alignItems:'flex-end',
          width: 36,
          height: 36,
        }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="google icon"
          src="/assets/icons/auth/ic_google_color.svg"
        />
      </IconButton>

      {/* 카카오톡 로그인 버튼 */}
      <IconButton
        onClick={kakaoLogin}
        sx={{
          alignItems:'flex-end',
          width: 36,
          height: 36,
          backgroundColor:"#FAE100"
        }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="google icon"
          src="/assets/icons/auth/ic_login_kakaotalk.svg"
        />
      </IconButton>

    </Stack>
  );
}
