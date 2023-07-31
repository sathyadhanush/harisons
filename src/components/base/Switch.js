import { useId } from 'react';
import 'components/scss/Switch.scss';
import { noop } from 'lodash';

function Switch({
  name = null,
  isDisabled = false,
  isChecked = false,
  onChange = noop,
}) {
  const id = useId();
  function handleChange(event) {
    event.stopPropagation();
    onChange(!isChecked);
  }
  return (
    <div className="ui-switch">
      <input
        id={id}
        className="ui-switch__input"
        type="checkbox"
        name={name}
        onClick={(e) => e.stopPropagation()}
        disabled={isDisabled}
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="ui-switch__slider" />
    </div>
  );
}

export default Switch;
