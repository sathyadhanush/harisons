import clsx from 'clsx';
import { forwardRef, useRef } from 'react';

import 'components/scss/TextInput.scss';

const TextInput = forwardRef(({
  type = 'text',
  className,
  id,
  name,
  value,
  width,
  onChange,
  onFocus,
  onBlur,
  error,
  iconPrefix = null,
  iconSuffix = null,
  maxLength,
  readOnly,
  placeholder,
  onClick,
}, ref) => {
  const $container = useRef();
  const $input = useRef();

  function handleMouseDown(event) {
    if ($input.current.contains(event.target)) {
      return;
    }
    if ($container.current.contains(event.target)) {
      event.preventDefault();
      $input.current.focus();
    }
  }

  function handleFocus(event) {
    $container.current.classList.add('ui-textinput__focused');
    if (onFocus) {
      onFocus(event);
    }
  }

  function handleBlur(event) {
    $container.current.classList.remove('ui-textinput__focused');
    if (onBlur) {
      onBlur(event);
    }
  }

  return (
    <div
      ref={$container}
      onMouseDown={handleMouseDown}
      className={clsx('ui-textinput', className, {
        'ui-textinput--invalid': !!error,
      })}
      style={{ width }}
    >
      <div className="ui-textinput__input-wrapper">
        {iconPrefix && <div className="ui-textinput__icon-prefix">{iconPrefix}</div>}
        <input
          id={id}
          name={name}
          className="ui-textinput__input"
          ref={(element) => {
            $input.current = element;
            if (ref) {
              ref.current = element;
            }
          }}
          type={type}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          readOnly={readOnly}
          onClick={onClick}
        />
        {iconSuffix && <div className="ui-textinput__icon-suffix">{iconSuffix}</div>}
      </div>
      {error && <div className="ui-textinput__error">{error}</div>}
    </div>
  );
});

export default TextInput;
