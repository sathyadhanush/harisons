import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toaster } from 'evergreen-ui';
import { useRef } from 'react';
import Button from 'src/components-new/button';
import FormField from '../../components/FormField';
import { passwordSchema } from '../../shared/utils/formikValidators';

export default function ChangePassword() {
  const $currentPassword = useRef();

  async function handleSubmit(values, formik) {
    toaster.success('Password updated sucessfully');
    formik.setTouched({}, false);
    formik.setValues({
      currentPassword: '',
      newPassword: '',
    });
  }

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
    },
    validationSchema: Yup.object().shape({
      currentPassword: passwordSchema,
      newPassword: passwordSchema,
    }),
    onSubmit: (values) => handleSubmit(values, formik),
  });

  return (
    <>
      <FormField
        ref={$currentPassword}
        type="password"
        label="Current password"
        name="currentPassword"
        value={formik.values.currentPassword}
        onBlur={formik.handleBlur}
        error={formik.touched.currentPassword && formik.errors.currentPassword}
        onChange={formik.handleChange}
      />
      <FormField
        type="password"
        label="New password"
        name="newPassword"
        value={formik.values.newPassword}
        onBlur={formik.handleBlur}
        error={formik.touched.newPassword && formik.errors.newPassword}
        onChange={formik.handleChange}
      />
      <div className="flex" style={{ justifyContent: 'end', marginTop: '30px' }}>
        <Button
          isDisabled={!formik.dirty}
          label="Change password"
          appearance="primary"
          onClick={formik.handleSubmit}
          isLoading={formik.isSubmitting}
        />
      </div>
    </>
  );
}
