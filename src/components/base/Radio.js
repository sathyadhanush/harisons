import clsx from 'clsx';
import { useId } from 'react';

function Radio({
  name,
  label,
  value,
  checked,
  className,
  onChange,
}) {
  const id = useId();
  return (
    <label
      className={clsx('ui-radio', className)}
      htmlFor={`${id}-${value}`}
    >
      <input
        className="ui-radio__input"
        id={`${id}-${value}`}
        type="radio"
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="ui-radio__button" />
      {label}
    </label>
  );
}
export default Radio;
