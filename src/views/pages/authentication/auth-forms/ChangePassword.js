// material-ui
import { useTheme } from '@mui/material/styles';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { changePassword } from '../../../../redux/actions/userAction';
// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const ChangePassword = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: ''
  });

  const handleChange = (e) =>
    setPassword({
      ...password,
      [e.target.name]: e.target.value
    });

  console.log('pwd', password);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(changePassword(password));
    navigate('/pages/login/login3');

    setPassword({
      oldPassword: '',
      newPassword: ''
    });
  };
  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 1 }}>
                    <Link to="#">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Change Password
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    {/* {form} */}
                    <Formik
                      initialValues={{
                        oldPassword: '',
                        newPassword: '',
                        submit: null
                      }}
                      validationSchema={Yup.object().shape({
                        oldPassword: Yup.string().max(255).required('current Password is required'),
                        newPassword: Yup.string().max(255).required('new Password is required')
                      })}
                      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        try {
                          if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                          }
                        } catch (err) {
                          console.error(err);
                          if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                          }
                        }
                      }}
                    >
                      {({ errors, handleBlur, isSubmitting, touched }) => (
                        <form noValidate onSubmit={handleSubmit}>
                          <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                          >
                            <InputLabel htmlFor="outlined-adornment-password-login">Current Password</InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password-login"
                              type={showPassword ? 'text' : 'password'}
                              value={password.oldPassword}
                              name="oldPassword"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="large"
                                  >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="oldPassword"
                              inputProps={{}}
                            />
                            {touched.oldPassword && errors.oldPassword && (
                              <FormHelperText error id="standard-weight-helper-text-password-login">
                                {errors.oldPassword}
                              </FormHelperText>
                            )}
                          </FormControl>

                          <FormControl
                            fullWidth
                            error={Boolean(touched.newPassword && errors.newPassword)}
                            sx={{ ...theme.typography.customInput }}
                          >
                            <InputLabel htmlFor="outlined-adornment-password-login">New Password</InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password-login"
                              type={showPassword ? 'text' : 'password'}
                              value={password.newPassword}
                              name="newPassword"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="large"
                                  >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="newPassword"
                              inputProps={{}}
                            />
                            {touched.newPassword && errors.newPassword && (
                              <FormHelperText error id="standard-weight-helper-text-password-login">
                                {errors.newPassword}
                              </FormHelperText>
                            )}
                          </FormControl>

                          {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                              <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                          )}

                          <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                              <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="secondary"
                              >
                                Submit
                              </Button>
                            </AnimateButton>
                          </Box>
                        </form>
                      )}
                    </Formik>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default ChangePassword;
