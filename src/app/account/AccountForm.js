import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'components/Form';
import FormFieldGroup from 'components/FormFieldGroup';
import FormField from 'components/FormField';
import { useHeader } from 'components/AppHeader';
import ButtonGroup from 'components/base/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Button from 'src/components-new/button';
import ChangePassword from './ChangePassword';

function AccountForm({ account, onSubmit }) {
  const $firstName = useRef();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      // firstName: account.getFirstName(),
      // lastName: account.getLastName(),
      // timeZone: account.getTimeZone(),
      // email: account.getEmail(),
      // logo: account.getImageUpdatedAt() ? `/v1/images/accounts/${account.getId()}` : '',
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().trim().required('First name is required').max(50, 'First name should not exceed 50 characters'),
      lastName: Yup.string().trim().notRequired().max(50, 'Last name should not exceed 50 characters'),
    }),
    onSubmit,
  });

  useHeader({
    title: 'My Account',
    actions: (
      <ButtonGroup>
        <Button label="Discard" onClick={() => navigate('..')} />
        <Button
          isDisabled={!formik.dirty}
          label="Save"
          appearance="primary"
          onClick={formik.handleSubmit}
          isLoading={formik.isSubmitting}
        />
      </ButtonGroup>
    ),
  });
  useEffect(() => {
    $firstName.current.focus();
  }, []);

  function renderGeneralSection() {
    return (
      <form>
        <FormField
          type="image"
          name="logo"
          value={formik.values.logo}
          onChange={(target) => formik.setFieldValue('logo', target.target.value)}
          icon="person-circle-outline"
        />
        <FormFieldGroup>
          <FormField
            ref={$firstName}
            label="First name"
            name="firstName"
            placeholder="John"
            value={formik.values.firstName}
            error={formik.errors.firstName}
            onChange={formik.handleChange}
          />
          <FormField
            label="Last name"
            name="lastName"
            placeholder="Doe"
            value={formik.values.lastName}
            error={formik.errors.lastName}
            onChange={formik.handleChange}
          />
        </FormFieldGroup>
        <FormField
          label="Email"
          name="email"
          value={formik.values.email}
          isReadOnly
        />
        <FormField
          type="select"
          label="Time zone"
          name="timeZone"
          value={formik.values.timeZone}
          onChange={formik.handleChange}
        />
      </form>
    );
  }

  function renderChangePassword() {
    return (
      <ChangePassword />
    );
  }

  return (
    <Form
      sections={[
        {
          name: 'General',
          id: 'general',
          content: renderGeneralSection(),
        },
        {
          name: 'Password',
          id: 'password',
          content: renderChangePassword(),
        },
      ]}
    />
  );
}

export default AccountForm;
