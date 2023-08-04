import emailjs from 'emailjs-com';
import { Heading, toaster } from 'evergreen-ui';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormField from 'components/FormField';
import Button from 'components/base/Button';
import { useRef } from 'react';

function ContactUsFrom() {
  const form = useRef();

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape({
      // lastName: Yup.string().trim().max(50, 'Last name cannot exceed 50 characters'),
    }),
    // eslint-disable-next-line no-use-before-define
    onSubmit: sendEmail,
    enableReinitialize: true,
  });

  function sendEmail() {
    // emailjs.sendForm('smtpmail', 'template_3t7qiio', form.current, '9UYEcZJhutBz2in5K')
    //   .then((result) => {
    // toaster.success('Sucessfully submitted');
    // formik.setValues({});
    //     console.log(result);
    //   }, (error) => {
    //     console.log(error);
    //   });
    toaster.success('Sucessfully submitted');
    formik.setFieldValue({});
  }

  return (
    <form
      className="flex-column"
      ref={form}
      style={{ alignItems: 'center', paddingBottom: '50px' }}
      onSubmit={formik.handleSubmit}
      id="contact"
    >
      <Heading fontSize="40px" paddingBottom={40}>Contact us</Heading>
      <FormField
        placeholder="Name"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name}
        width="300px"
      />
      <FormField
        placeholder="Phone number"
        name="phoneNumber"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phoneNumber}
        error={formik.touched.phoneNumber && formik.errors.phoneNumber}
        width="300px"
      />
      <FormField
        placeholder="Email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        width="300px"
      />
      <FormField
        placeholder="Tell us about yourself"
        name="tellUs"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.tellUs}
        error={formik.touched.tellUs && formik.errors.tellUs}
        width="300px"
      />
      <Button appearance="primary" style={{ width: '300px' }} type="submit">Send</Button>
    </form>
  );
}

export default ContactUsFrom;
