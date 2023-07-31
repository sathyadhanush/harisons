import React from 'react';
import cx from 'clsx';
import { noop } from 'lodash';

function OTPTextBox({
  isInvalid = false,
  value = '',
  digits = 4,
  onChange = noop,
}) {
  function handleInputChange(e) {
    const prevInput = e.target.previousElementSibling;
    const nextInput = e.target.nextElementSibling;
    const inputs = e.target.parentElement.children;
    const { value: nextValue } = e.target;

    if (e.code === 'Tab') {
      return;
    }

    if (e.code === 'Backspace') {
      if (nextValue) {
        e.target.value = '';
      } else {
        prevInput.value = '';
        prevInput.focus();
      }
      e.preventDefault();
      const code = Array.from(inputs).map((input) => input.value).join('');
      onChange(code);
      return;
    }

    if (e.code === 'ArrowLeft' && prevInput) {
      prevInput.focus();
      return;
    }

    if (e.code === 'ArrowRight' && nextInput) {
      nextInput.focus();
      return;
    }

    if (!e.code.includes('Digit')) {
      e.preventDefault();
      return;
    }

    e.target.value = e.key;

    if (nextInput) {
      nextInput.focus();
      e.preventDefault();
    }

    const code = Array.from(inputs).map((input) => input.value).join('');
    onChange(code);
  }

  function renderInputs() {
    const inputs = [];
    for (let i = 0; i < digits; i += 1) {
      inputs.push(
        <input
          key={i}
          tabIndex={i + 1}
          type="text"
          required
          value={value[i] || ''}
          autoComplete="off"
          maxLength="1"
          className="ui-otpinput__digit"
          onKeyDown={handleInputChange}
        />,
      );
    }
    return (
      <div className="ui-otpinput__digits">
        {inputs}
      </div>
    );
  }

  return (
    <div className={cx('ui-otpinput', {
      'ui-otpinput--error': isInvalid,
    })}
    >
      {renderInputs()}
    </div>
  );
}

export default OTPTextBox;
