import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useSearchParams, useRouter } from 'src/routes/hooks';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function JwtRegisterView() {
  const { register } = useAuthContext();

  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState('');

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');

  const password = useBoolean();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

<<<<<<< HEAD
=======
  // 이용약관 체크박스
  const [allAgree, setAllAgree] = useState(true);
  const [taService, setTaService] = useState(true);
  const [taPrivacy, setTaPrivacy] = useState(true);
  const [taMarketing, setTaMarketing] = useState(true);
  const [emailRcv, setEmailRcv] = useState(true);
  const [smsRcv, setSmsRcv] = useState(true);
  const [snsRcv, setSnsRcv] = useState(true);

  useEffect(() => {
    const remainingCheckboxes = [
      taService,
      taPrivacy,
      taMarketing,
      emailRcv,
      smsRcv,
      snsRcv,
    ];
    // 조건 1: emailRcv, smsRcv, snsRcv 모두 false면 taMarketing false
    if (!emailRcv && !smsRcv && !snsRcv) {
      setTaMarketing(false);
    } else {
      // 조건 2: emailRcv, smsRcv, snsRcv 중 하나라도 true이면 taMarketing true
      setTaMarketing(true);
    }
    // 조건 3: 전부 true이면 전체 동의 true
    const allChecked = remainingCheckboxes.every((checkbox) => checkbox);
    setAllAgree(allChecked);
  }, [taService, taPrivacy, taMarketing, emailRcv, smsRcv, snsRcv]);



  /**
   * 이용약관 전체 동의
   */
  const handleAllAgreeChange = () => {
    const checked = !allAgree;
    setAllAgree(checked);
    setTaService(checked);
    setTaPrivacy(checked);
    setTaMarketing(checked);
    setEmailRcv(checked);
    setSmsRcv(checked);
    setSnsRcv(checked);
  };

  /**
   * 이용약관 체크박스 선택
   * @param setState
   */
  const handleCheckboxChange = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
      setState(prevState => !prevState);
    };
  /**
   * 마케팅 체크박스 선택
   */
  const handleMarketingCheckboxChange = () => {
    const isChecked = !taMarketing;
    setTaMarketing(isChecked);
    setEmailRcv(isChecked);
    setSmsRcv(isChecked);
    setSnsRcv(isChecked);
  };


>>>>>>> 9153c2dd8ddf7651cdfaecb947f8f99c2e3c170b
  const onSubmit = handleSubmit(async (data) => {
    try {
      await register?.(data.email, data.password, data.firstName, data.lastName);

      router.push(returnTo || PATH_AFTER_LOGIN);
    } catch (error) {
      console.error(error);
      reset();
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography variant="h4">Get started absolutely free</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2"> Already have an account? </Typography>

        <Link href={paths.auth.jwt.login} component={RouterLink} variant="subtitle2">
          Sign in
        </Link>
      </Stack>
    </Stack>
  );

  const renderTerms = (
    <Typography
      component="div"
      sx={{
        color: 'text.secondary',
        mt: 2.5,
        typography: 'caption',
        textAlign: 'center',
      }}
    >
      {'By signing up, I agree to '}
      <Link underline="always" color="text.primary">
        Terms of Service
      </Link>
      {' and '}
      <Link underline="always" color="text.primary">
        Privacy Policy
      </Link>
      .
    </Typography>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2.5}>
        {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}
<<<<<<< HEAD

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" />
=======
        <RHFTextField
          name="email"
          label={<Typography>이메일<Typography component='span' sx={{ color: "error.main" }}>*</Typography></Typography>}
        />
>>>>>>> 9153c2dd8ddf7651cdfaecb947f8f99c2e3c170b

        <RHFTextField
          name="password"
          label="Password"
          type={password.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

<<<<<<< HEAD
=======
        <RHFTextField
          name="fullName"
          label={<Typography>이름<Typography component='span' sx={{ color: "error.main" }}>*</Typography></Typography>}
        />
        <RHFTextField
          name="mobile"
          label={<Typography>휴대폰번호<Typography component='span' sx={{ color: "error.main" }}>*</Typography></Typography>}
        />

        {/* 이용약관 */}
        <FormGroup sx={{ textAlign: 'left' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={allAgree}
                onChange={handleAllAgreeChange}
              />
            }
            label="모두 동의합니다."
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={taService}
                  onChange={() => handleCheckboxChange(setTaService)}
                />
              }
              label="(필수) 서비스 이용약관에 동의합니다."
            />
            <Iconify
              icon="carbon:chevron-right"
              sx={{ cursor: 'pointer' }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={taPrivacy}
                  onChange={() => handleCheckboxChange(setTaPrivacy)}
                />
              }
              label="(필수) 개인정보 처리방침에 동의합니다."
            />
            <Iconify
              icon="carbon:chevron-right"
              sx={{ cursor: 'pointer' }}
            />
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={taMarketing}
                onChange={handleMarketingCheckboxChange}
              />
            }
            label="(선택) 마케팅 정보 수신에 동의합니다."
          />
          <Stack sx={{ pl: 2.5 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={emailRcv}
                  onChange={() => handleCheckboxChange(setEmailRcv)}
                />
              }
              label="(선택) 이메일 수신 동의"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={smsRcv}
                  onChange={() => handleCheckboxChange(setSmsRcv)}
                />
              }
              label="(선택) SMS 수신 동의"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={snsRcv}
                  onChange={() => handleCheckboxChange(setSnsRcv)}
                />
              }
              label="(선택) SNS 수신 동의"
            />
          </Stack>
        </FormGroup>

>>>>>>> 9153c2dd8ddf7651cdfaecb947f8f99c2e3c170b
        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Create account
        </LoadingButton>
      </Stack>
    </FormProvider>
  );

  return (
    <>
      {renderHead}

      {renderForm}

      {renderTerms}
    </>
  );
}
