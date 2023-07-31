import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Button from 'components/base/Button';
import FormField from 'components/FormField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toaster } from 'evergreen-ui';
import { passwordSchema } from '../shared/utils/formikValidators';
import LogoImg from '../assets/img/logo.svg';
import AuthService from '../service/AuthService';
import { errorMessage } from '../shared/utils/validators';
import './index.scss';

document.title = 'Forgot password — 7Commerce';

const Views = {
  EmailPrompt: 'email',
  Verification: 'verification',
  NewPassword: 'newPassword',
};

function ResetPasswordPage() {
  const $email = useRef();
  const $newPassword = useRef();
  const [currentView, setCurrentView] = useState(Views.EmailPrompt);
  const [verificationId, setVerificationId] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: '',
      verificationCode: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().trim().required('Required email address').email('Please enter a valid email address'),
    }),
    // eslint-disable-next-line no-use-before-define
    onSubmit: handeleSubmit,
  });
  const passwordFormik = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: Yup.object().shape({
      newPassword: passwordSchema,
      confirmNewPassword: passwordSchema,
    }),
    // eslint-disable-next-line no-use-before-define
    onSubmit: handeleSubmit,
  });

  useEffect(() => {
    $email.current.focus();
  }, []);

  async function handeleSubmit() {
    try {
      if (currentView === Views.EmailPrompt) {
        const id = await AuthService.createEmailVerificationCode(formik.values.email);
        setVerificationId(id);
        setCurrentView(Views.Verification);
      } else if (currentView === Views.Verification) {
        // TODO : Otp api validation
        setCurrentView(Views.NewPassword);
      } else if (currentView === Views.NewPassword) {
        if (passwordFormik.values.newPassword.trim()
          !== passwordFormik.values.confirmNewPassword.trim()) {
          toaster.notify('New password and confirm new password must be same', { id: 'message' });
        } else {
          await AuthService.resetPassword({
            loginId: formik.values.email,
            verificationId,
            verificationCode: formik.values.verificationCode,
            password: passwordFormik.values.confirmNewPassword,
          });
          window.location.replace('/signin');
          toaster.success('Password rested sucessfully');
        }
      }
    } catch (error) {
      const message = errorMessage(error);
      if (message) {
        toaster.danger(message, { id: 'message' });
      } else {
        toaster.danger('Something wrong', { id: 'message' });
      }
    }
  }

  function renderEmail() {
    return (
      <>
        <div className="ui-card__header">
          <div className="ui-heading">Forgot your password?</div>
          <div className="ui-subheading">We&apos;ll email you a code to reset your password.</div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <FormField
            ref={$email}
            label="Email"
            name="email"
            placeholder="johndoe@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />
          <Button type="submit" appearance="primary" size="large">Reset password</Button>
        </form>
      </>
    );
  }

  function renderVerification() {
    return (
      <>
        <div className="ui-card__header">
          <div className="ui-heading">One-Time Password</div>
        </div>
        <form onSubmit={(event) => {
          event.preventDefault();
          handeleSubmit();
        }}
        >
          <p style={{ display: 'flex', flexWrap: 'wrap', columnGap: '10px' }}>
            One-Time Password has been sent to
            <div style={{ fontWeight: '600' }}>{formik.values.email}</div>
            <div
              className="ui-link"
              onClick={() => {
                setCurrentView(Views.EmailPrompt);
                $email.current.focus();
              }}
            >
              Change
            </div>
          </p>
          <FormField
            type="otp"
            name="verificationCode"
            value={formik.values.verificationCode}
            onChange={formik.handleChange}
          />
          <Button type="submit" appearance="primary" size="large">Verify</Button>
        </form>
      </>
    );
  }

  function renderNewPassword() {
    return (
      <>
        <div className="ui-card__header">
          <div className="ui-heading">Create a password</div>
        </div>
        <form onSubmit={passwordFormik.handleSubmit}>
          <FormField
            ref={$newPassword}
            label="New password"
            name="newPassword"
            value={passwordFormik.values.newPassword}
            onChange={passwordFormik.handleChange}
            onBlur={passwordFormik.handleBlur}
            error={passwordFormik.touched.newPassword && passwordFormik.errors.newPassword}
          />
          <FormField
            label="Confirm new password"
            name="confirmNewPassword"
            value={passwordFormik.values.confirmNewPassword}
            onChange={passwordFormik.handleChange}
            onBlur={passwordFormik.handleBlur}
            error={passwordFormik.touched.confirmNewPassword
              && passwordFormik.errors.confirmNewPassword}
          />
          <Button
            type="submit"
            appearance="primary"
            size="large"
          >
            Reset password
          </Button>
        </form>
      </>
    );
  }

  function renderView() {
    if (currentView === Views.EmailPrompt) {
      return (renderEmail());
    } if (currentView === Views.Verification) {
      return (renderVerification());
    } if (currentView === Views.NewPassword) {
      return (renderNewPassword());
    }
  }

  return (
    <div className="ui-card">
      <div className="ui-logo">
        <img src={LogoImg} alt="logo" />
      </div>
      {renderView()}
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetPasswordPage />
  </React.StrictMode>,
);
