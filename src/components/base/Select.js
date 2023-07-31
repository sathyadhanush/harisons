import clsx from 'clsx';

import 'components/scss/Select.scss';

function Select({
  name,
  value,
  className,
  options,
  onChange,
}) {
  return (
    <div className={clsx('ui-select', className)}>
      <select
        name={name}
        className="ui-select__input"
        onChange={onChange}
        value={value}
      >
        {options && options.map((o) => (
          <option disabled={o.isDisabled} value={o.value}>
            {o.name}
          </option>
        ))}
      </select>
      <ion-icon class="ui-select__arrow" name="caret-down-outline" />
    </div>
  );
}

export default Select;
