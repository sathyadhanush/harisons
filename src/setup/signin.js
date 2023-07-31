import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import Button from 'components/base/Button';
import FormField from 'components/FormField';
import { toaster } from 'evergreen-ui';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MyAccountService from '../service/MyAccountService';
import StoreService from '../service/StoreService';
import { passwordSchema } from '../shared/utils/formikValidators';
import LogoImg from '../assets/img/logo.svg';
import { errorMessage } from '../shared/utils/validators';
import './index.scss';

document.title = '7Commerce Accounts';

function SignInPage() {
  async function handleSubmit(values) {
    try {
      await axios.post('/signin', {
        username: values.userName,
        password: values.password,
      }, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      });
      const account = await MyAccountService.fetch();
      const organizationId = account.getOrganizationId();
      if (!organizationId) {
        window.location.replace('/create-store');
      }
      const stores = await StoreService.getOrganizationStores({ organizationId });
      if (stores.length === 0) {
        window.location.replace('/create-store');
      }
      window.location.replace('/');
    } catch (error) {
      const message = errorMessage(error);
      if (message) {
        toaster.danger(message, { id: 'message' });
      } else {
        toaster.danger('Something wrong', { id: 'message' });
      }
    }
  }
  const $userName = useRef();
  const formik = useFormik({
    initialValues: {
      userName: 'rich@dev.orkaapps.com',
      password: 'Test@123',
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string().trim().required('Required email address')
        .email('Please enter a valid email address'),
      password: passwordSchema,
    }),
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    $userName.current.focus();
  }, []);

  return (
    <div className="ui-card">
      <div className="ui-logo">
        <img src={LogoImg} alt="logo" />
      </div>
      <div className="ui-card__header">
        <div className="ui-heading">Sign in</div>
        <div className="ui-subheading">Continue to 7Commerce</div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <FormField
          ref={$userName}
          label="Email address"
          name="userName"
          placeholder="johndoe@example.com"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userName && formik.errors.userName}
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
        />
        <div>
          <a href="/password-reset" className="ui-link">Forgot password?</a>
          <br />
          <br />
        </div>
        <Button type="submit" appearance="primary" size="large">Sign in</Button>
      </form>
      <br />
      <p>
        New to 7Commerce ?
        <a style={{ marginLeft: '5px' }} href="/signup" className="ui-link">Get started</a>
      </p>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignInPage />
  </React.StrictMode>,
);
