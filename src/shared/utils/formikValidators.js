import { capitalize } from 'lodash';
import * as Yup from 'yup';

export const passwordSchema = Yup.string().trim().required('Required password must not be empty')
  .min(8, 'Password must be at least 8 characters')
  .matches(/^(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
  .matches(/^(?=.*[a-z])/, 'Password must contain at least one lowercase letter');

export const percentageSchema = ({ errorName = '', isRequired = true }) => {
  if (isRequired) {
    return (
      Yup.number()
        .typeError(`Enter valid ${errorName}`)
        .required(`${capitalize(errorName)} must not be empty`)
        .min(1, `${capitalize(errorName)} must be in 1 to 100`)
        .max(100, `${capitalize(errorName)} must be in 1 to 100`)
    );
  }
  return (
    Yup.number()
      .typeError(`Enter valid ${errorName}`)
      .notRequired()
      .min(1, `${capitalize(errorName)} must be in 1 to 100`)
      .max(100, `${capitalize(errorName)} must be in 1 to 100`)
  );
};

export const emailSchema = ({ isRequired = true }) => {
  if (isRequired) {
    return (
      Yup.string().trim().required('Required email address cannot be empty')
        .email('Please enter a valid email address'));
  }
  return (
    Yup.string().trim().notRequired()
      .email('Please enter a valid email address'));
};

export const mobileSchema = ({ isRequired = true }) => {
  if (isRequired) {
    return (
      Yup.string().trim().required('Required mobile number cannot be empty')
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, 'Please enter a valid mobile number'));
  }
  return (
    Yup.string().trim().notRequired()
      .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, 'Please enter a valid mobile number'));
};

export const positiveNumberRegex = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;

export const portalNameSchema = Yup.string()
  .required('Portal name must not be empty')
  .min(3, 'Portal name length must be between 3 to 15 characters')
  .max(15, 'Portal name length must be between 3 to 15 characters')
  .matches(/^[A-Za-z0-9]+$/, 'Portal name must contain only letters and numbers');
