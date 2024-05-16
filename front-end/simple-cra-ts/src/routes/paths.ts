// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
    callback:{
      googleCallback: `${ROOTS.AUTH}/callback/google-callback`,
      kakaoCallback: `${ROOTS.AUTH}/callback/kakao-callback`,
    }
  },
  // DASHBOARD
  dashboard: {
    board: `${ROOTS.DASHBOARD}/board`,
    root: ROOTS.DASHBOARD,
    one: `${ROOTS.DASHBOARD}/one`,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
    reactHookSample: `${ROOTS.DASHBOARD}/reactHookSample`,
    samplePage1: `${ROOTS.DASHBOARD}/samplePage1`,
    samplePage2: `${ROOTS.DASHBOARD}/samplePage2`,
  },
};
