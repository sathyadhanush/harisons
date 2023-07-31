import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { emailSchema, mobileSchema } from 'src/shared/utils/formikValidators';
import Popover from './base/Popover';
import ActionList from './base/ActionList';
import Dialog from './base/Dialog';
import FormField from './FormField';

function TopBarUserMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape({
      title: Yup.string().trim().required('Required title must not be empty'),
      description: Yup.string().trim().required('Required description must not be empty'),
      email: emailSchema({ isRequired: true }),
      mobile: mobileSchema({ isRequired: true }),
    }),
    onSubmit: () => setOpen(false),
    enableReinitialize: true,
  });

  useEffect(() => {
    if (open) {
      formik.setTouched({}, false);
      formik.setValues({
        title: '',
        description: '',
        email: '',
        mobile: '',
      });
    }
  }, [open]);

  async function handleLogout() {
    await axios.post('/signout');
    window.location.replace('/signin');
  }

  function renderForm() {
    return (
      <div style={{ height: '55vh' }}>
        <FormField
          type="select"
          label="Type"
          name="type"
          isRequired
          value={formik.values.type}
          onChange={formik.handleChange}
          options={[{ name: 'Product feedback', valus: 'product-feedback' }]}
        />
        <FormField
          label="Title"
          name="title"
          isRequired
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && formik.errors.title}
        />
        <FormField
          label="Description"
          name="description"
          isRequired
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && formik.errors.description}
        />
        <FormField
          label="Email"
          name="email"
          isRequired
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />
        <FormField
          label="Mobile"
          name="mobile"
          isRequired
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.mobile && formik.errors.mobile}
        />
      </div>
    );
  }

  function renderSendFeadBackDialog() {
    return (
      <Dialog
        isOpen={open}
        title="Send feed back"
        onCancel={() => setOpen(false)}
        onConfirm={formik.handleSubmit}
        content={renderForm()}
      />
    );
  }

  return (
    <>
      {renderSendFeadBackDialog()}
      <Popover
        placements={['bottom', 'bottom-end']}
        trigger={(
          <ion-icon
            name="person-circle-outline"
            style={{
              color: 'gray',
              cursor: 'pointer',
              fontSize: '30px',
            }}
          />
        )}
      >
        <ActionList
          items={[
            {
              label: 'My account',
              prefix: <ion-icon name="person-circle-outline" />,
              onClick: () => navigate('account'),
            },
            {
              label: 'Help & support',
              prefix: <ion-icon name="help-buoy-outline" />,
              onClick: () => navigate('help'),
            },
            {
              label: 'Send feedback',
              prefix: <ion-icon name="help-buoy-outline" />,
              onClick: () => setOpen(true),
            },
            {
              label: 'Log out',
              prefix: <ion-icon name="log-out-outline" />,
              onClick: handleLogout,
            },
          ]}
        />
      </Popover>
    </>
  );
}

export default TopBarUserMenu;
