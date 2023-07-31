import React, { useEffect, useRef, useState } from 'react';
import { toaster } from 'evergreen-ui';
import { createRoot } from 'react-dom/client';
import Button from 'components/base/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from 'components/FormField';
import FormFieldGroup from 'components/FormFieldGroup';
import { passwordSchema } from '../shared/utils/formikValidators';
import AuthService from '../service/AuthService';
import LogoImg from '../assets/img/logo.svg';
import './index.scss';
import { errorMessage } from '../shared/utils/validators';

document.title = 'Sign up — 7Commerce';

function SignUpPage() {
  const $firstName = useRef();
  const [isOtpView, setOtpView] = useState(false);
  const [verificationId, setVerificationId] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      verificationCode: '',
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().trim().required('Required first name').max(50, 'First name should not exceed 50 characters'),
      lastName: Yup.string().trim().max(50, 'Last name should not exceed 50 characters'),
      email: Yup.string().trim().required('Required email address').email('Please enter a valid email address'),
      password: passwordSchema,
    }),
    // eslint-disable-next-line no-use-before-define
    onSubmit: handleOtp,
  });

  useEffect(() => {
    $firstName.current.focus();
  }, []);

  async function handleOtp(values) {
    try {
      const id = await AuthService.createEmailVerificationCode(values.email);
      setVerificationId(id);
      setOtpView(true);
    } catch (error) {
      const message = errorMessage(error);
      if (message) {
        toaster.danger(message, { id: 'message' });
      } else {
        toaster.danger('Something wrong', { id: 'message' });
      }
    }
  }

  async function handleSignUp(event) {
    event.preventDefault();
    try {
      await AuthService.createAccount({
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        email: formik.values.email,
        password: formik.values.password,
        verificationCode: formik.values.verificationCode,
        verificationId,
      });
      toaster.success('Account created sucessfully', { id: 'message' });
      window.location.replace('/create-store');
    } catch {
      toaster.danger('Something went wrong', { id: 'message' });
    }
  }

  function renderSignUp() {
    return (
      <form onSubmit={formik.handleSubmit}>
        <FormFieldGroup>
          <FormField
            ref={$firstName}
            label="First name *"
            name="firstName"
            placeholder="John"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && formik.errors.firstName}
            onChange={formik.handleChange}
          />
          <FormField
            label="Last name"
            name="lastName"
            placeholder="Doe"
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            error={formik.touched.lastName && formik.errors.lastName}
            onChange={formik.handleChange}
          />
        </FormFieldGroup>
        <FormField
          label="Email address *"
          name="email"
          placeholder="john.doe@example.com"
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
        />
        <FormField
          label="Password *"
          name="password"
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
        />
        <input
          type="hidden"
          name="verificationId"
          value={formik.values.verificationId}
          onChange={formik.handleChange}
        />
        <p>
          {'By continuing, you agree to our '}
          <a className="ui-link" href="/terms">Terms of Use</a>
          {' and '}
          <a className="ui-link" href="/privacy">Privacy Policy</a>
          .
        </p>
        <br />
        <Button type="submit" appearance="primary" size="large">Get started</Button>
        <br />
        <br />
        <p>
          Already have an account?
          <a style={{ marginLeft: '5px' }} href="/signin" className="ui-link">Sign in</a>
        </p>
      </form>
    );
  }

  function renderOtp() {
    return (
      <form onSubmit={handleSignUp}>
        <p>
          Please enter the one-time passcode sent to
          <div style={{ fontWeight: '600' }}>{formik.values.email}</div>
          <div
            className="ui-link"
            onClick={() => {
              setOtpView(false);
              formik.setFieldValue('verificationCode', '');
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
    );
  }

  return (
    <div className="ui-card">
      <div className="ui-logo">
        <img src={LogoImg} alt="logo" />
      </div>
      <div className="ui-card__header">
        <div className="ui-heading">Create account</div>
        {!isOtpView && (
          <div className="ui-subheading">
            One last step before starting your free trial.
          </div>
        )}
      </div>
      {!isOtpView ? renderSignUp() : renderOtp()}
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUpPage />
  </React.StrictMode>,
);
