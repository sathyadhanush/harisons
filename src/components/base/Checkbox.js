import clsx from 'clsx';
import { useId } from 'react';

import 'components/scss/Checkbox.scss';

function Checkbox({
  className,
  label,
  isChecked,
  onChange,
}) {
  const id = useId();
  return (
    <label className={clsx('ui-checkbox', className)} htmlFor={`${id}-value`}>
      <input
        className="ui-checkbox__input"
        id={`${id}-value`}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default Checkbox;
