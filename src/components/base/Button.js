import 'components/scss/Button.scss';
import PropTypes from 'prop-types';

function Button({
  isSubmit = true,
  className,
  children,
  isLoading,
  appearance = 'default',
  size = 'default',
  ...restProps
}) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`ui-button ui-button--${size} ui-button--${appearance} ${className}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
};

export default Button;
