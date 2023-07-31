import clsx from 'clsx';
import 'components/scss/Radio.scss';
import { useId } from 'react';
import Radio from './Radio';

function RadioGroup({
  className,
  name,
  value,
  options,
  onChange,
}) {
  const id = useId();
  return (
    <div className={clsx('ui-radio-group', className)}>
      {options.map((o) => (
        <Radio
          key={o.value}
          label={o.label}
          name={name || id}
          value={o.value}
          disabled={o.disabled}
          checked={o.value === value}
          onChange={() => onChange(o)}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
