import { useId } from 'react';

function ChoiceList({
  label,
  name,
  choices,
  onChange,
  value,
  // selected = [],
  // isMultipleAllowed = false,
}) {
  const id = useId();

  function renderChoice(choice) {
    return (
      <label className="ui-choices__list__item" htmlFor={id} onClick={() => onChange(choice.value)}>
        <input
          id={`${id}-${choice.value}`}
          // type={isMultipleAllowed ? 'checkbox' : 'radio'}
          type="radio"
          name={name}
          value={value}
          disabled={choice.disabled}
          // onChange={() => onChange(choice.value)}
          checked={choice.value === value}
        />
        {choice.label}
      </label>
    );
  }

  return (
    <div className="ui-choices">
      {label && <div className="ui-choices__label">{label}</div>}
      <div className="ui-choices__list">
        {choices.map(renderChoice)}
      </div>
    </div>
  );
}

export default ChoiceList;
