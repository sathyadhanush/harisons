import React, { useEffect, useState, useRef } from 'react';
import { toaster } from 'evergreen-ui';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from 'components/FormField';
import Button from 'components/base/Button';
import { createRoot } from 'react-dom/client';
import Loading from 'components/base/Loading';
import OrganizationService from '../service/OrganizationService';
import StoreService from '../service/StoreService';
import appConfig from '../shared/js/app-config';
import GeoService from '../service/GeoService';
import LogoImg from '../assets/img/logo.svg';
import './index.scss';

document.title = 'Create store — 7Commerce';

function CreateStore() {
  const $name = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      StoreService.fetchBusinessTypes(),
      GeoService.fetchCountries(),
      appConfig.fetch(),
    ]).then(() => {
      setLoading(false);
      $name.current.focus();
    });
  }, []);

  async function handleSubmit(values) {
    let organizationId = appConfig.getOrganizationId();
    try {
      if (!organizationId) {
        organizationId = await OrganizationService.createOrganization();
        appConfig.setOrganizationId(organizationId);
      }
      await StoreService.createStore({
        organizationId,
        name: values.name,
        country: values.country,
        businessType: values.businessType,
      });
      toaster.success('Store created sucessfully');
      window.location.replace('/');
    } catch {
      toaster.danger('Some thing went wrong');
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      country: 'IN',
      businessType: 'electronics',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().trim().required('Required name must not be empty').max(50, 'Name should not exceed 50 characters'),
    }),
    onSubmit: handleSubmit,
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="ui-card">
      <div className="ui-logo">
        <img src={LogoImg} alt="logo" />
      </div>
      <div className="ui-card__header">
        <div className="ui-heading">Create store</div>
        <div className="ui-subheading">Your online storefront is just a few clicks away.</div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <FormField
          label="Name"
          name="name"
          placeholder="Blue mountain"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
          onChange={formik.handleChange}
          ref={$name}
        />
        <FormField
          type="country"
          label="Country"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        />
        <FormField
          type="select"
          label="Business type"
          name="businessType"
          value={formik.values.businessType}
          options={StoreService.getBusinessTypes()}
          onChange={formik.handleChange}
        />
        <Button type="submit" appearance="primary" size="large">Create</Button>
      </form>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateStore />
  </React.StrictMode>,
);
