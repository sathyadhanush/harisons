import 'components/scss/Button.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Spinner from './spinner';

function Button({
  label,
  icon = null,
  isIconOnly = false,
  isDisabled = false,
  isSubmit = true,
  isAsync = false,
  isLoading = false,
  className = '',
  appearance = 'default',
  size = 'default',
  onClick,
}) {
  const [isInProgress, setIsInProgress] = useState(false);

  async function handleClick() {
    if (isAsync) {
      setIsInProgress(true);
      onClick().finally(() => setIsInProgress(false));
      return;
    }
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      type={isSubmit ? 'submit' : 'button'}
      className={clsx(`ui-button ui-button--${size} ui-button--${appearance} ${className}`, {
        'ui-button--icon': isIconOnly,
      })}
      disabled={isDisabled || isInProgress || isLoading}
    >
      {isLoading || isInProgress ? <Spinner /> : (
        <>
          {icon && <span className="ui-button__icon">{icon}</span>}
          {label && <span className="ui-button__label">{label}</span>}
        </>
      )}
    </button>
  );
}

export default Button;
