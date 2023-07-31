import clsx from 'clsx';
import Radio from 'components/base/Radio';
import { useId } from 'react';
import 'src/scss/radio.scss';

function RadioGroup({
  className,
  name,
  value,
  options,
  onChange,
  orientation = 'vertical',
}) {
  const id = useId();
  return (
    <div className={clsx('ui-radiogroup', `ui-radiogroup--${orientation}`, className)}>
      {options.map((o) => (
        <Radio
          key={o.value}
          label={o.label}
          name={name || id}
          value={o.value}
          disabled={o.disabled}
          checked={o.value === value}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
