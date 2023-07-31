import {
  TextareaField,
  TagInput,
} from 'evergreen-ui';
import { forwardRef } from 'react';
import RadioGroup from 'src/components-new/radio-group';
import TextInput from './base/TextInput';
import Editor from './Editor';
import Select from './base/Select';
// import GeoService from '../service/GeoService';
import OTPTextBox from './base/OTPTextBox';
import CountrySelect from './CountrySelect';
import DatePicker from './base/DatePicker';
import Upload from './Upload';
import './scss/form.scss';
import Checkbox from './base/Checkbox';

const FieldValidations = {
  BLANK: 'blank',
  EMAIL: 'email',
};

const FormField = forwardRef(({
  type = 'text',
  name,
  label,
  value,
  error,
  isRequired,
  onChange,
  orientation,
  onBlur,
  options,
  height,
  readOnly,
  placeholder,
  maxLength,
  icon,
  iconSuffix,
  onClick,
  width,
}, ref) => {
  function renderTextBox() {
    return (
      <TextInput
        type={type}
        name={name}
        maxLength={maxLength}
        label={label}
        iconPrefix={icon}
        value={value}
        error={error}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        readOnly={readOnly}
        iconSuffix={iconSuffix}
        onClick={onClick}
        width={width}
      />
    );
  }

  function renderTextArea() {
    return (
      <TextareaField
        ref={ref}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        validationMessage={error}
        placeholder={placeholder}
      />
    );
  }

  function renderCheckBox() {
    return (
      <Checkbox
        label={label}
        ref={ref}
        onBlur={onBlur}
        isChecked={value}
        onChange={onChange}
      />
    );
  }

  function renderRadioButtons() {
    return (
      <RadioGroup
        ref={ref}
        name={name}
        label={label}
        value={value}
        orientation={orientation}
        options={options}
        onChange={onChange}
      />
    );
  }

  function renderSelectBox() {
    return (
      <Select
        name={name}
        value={value}
        options={options}
        onChange={onChange}
      />
    );
  }

  function renderDatePicker() {
    return (
      <DatePicker
        name={name}
        value={value}
        onChange={(nextValue) => onChange({ target: { name, value: nextValue } })}
      />
    );
  }

  // function renderCountrySelectBox() {
  //   return (
  //     <CountrySelect
  //       name={name}
  //       options={GeoService.getCountries().map((country) => ({
  //         name: country.name,
  //         value: country.code,
  //       }))}
  //       onChange={onChange}
  //       value={value}
  //     />
  //   );
  // }

  function renderPasswordTextBox() {
    return (
      <TextInput
        name={name}
        value={value}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        isPassword
        placeholder={placeholder}
        error={error}
      />
    );
  }

  function renderEditor() {
    return (
      <Editor
        name={name}
        value={value}
        onBlur={onBlur}
        height={height}
        onChange={onChange}
      />
    );
  }

  function renderTagInput() {
    return (
      <TagInput
        values={value || []}
        onBlur={onBlur}
        onChange={onChange}
      />
    );
  }

  function renderOTP() {
    return (
      <OTPTextBox
        value={value}
        onBlur={onBlur}
        name={name}
        onChange={(code) => onChange({
          target: {
            name,
            value: code,
          },
        })}
      />
    );
  }

  function renderImage() {
    let url = null;
    if (value instanceof File) {
      url = URL.createObjectURL(value);
    } else {
      url = value;
    }
    return (
      <Upload
        icon={icon}
        url={url}
        onChange={(file) => onChange({
          target: { value: file },
        })}
      />
    );
  }

  function renderContent() {
    if (type === 'text' || type === 'number') {
      return renderTextBox();
    }
    if (type === 'image') {
      return renderImage();
    }
    if (type === 'date') {
      return renderDatePicker();
    }
    if (type === 'otp') {
      return renderOTP();
    }
    if (type === 'textarea') {
      return renderTextArea();
    }
    if (type === 'editor') {
      return renderEditor();
    }
    if (type === 'checkbox') {
      return renderCheckBox();
    }
    if (type === 'radio') {
      return renderRadioButtons();
    }
    if (type === 'select') {
      return renderSelectBox();
    }
    if (type === 'country') {
      // return renderCountrySelectBox();
    }
    if (type === 'password') {
      return renderPasswordTextBox();
    }
    if (type === 'tags') {
      return renderTagInput();
    }
    throw new Error('invalid form field type');
  }

  return (
    <div className="ui-form-field">
      {label && type !== 'checkbox' && (
        <div className="ui-form-field__label">
          {label}
          {isRequired && <span style={{ color: '#CA3521', marginLeft: 2 }}>*</span>}
        </div>
      )}
      {renderContent()}
    </div>
  );
});

export default FormField;
export { FieldValidations };
