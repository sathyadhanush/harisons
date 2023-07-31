import clsx from 'clsx';
import PropTypes from 'prop-types';

import 'components/scss/Alert.scss';

function Alert({
  className,
  level = 'info',
  isRemovable = true,
  children,
}) {
  function renderRemoveIcon() {
    return (
      <span className="ui-alert__remove">
        <ion-icon name="close-outline" />
      </span>
    );
  }

  return (
    <div className={clsx('ui-alert', `ui-alert--${level}`, className)}>
      {children}
      {isRemovable && renderRemoveIcon()}
    </div>
  );
}

Alert.propTypes = {
  level: PropTypes.oneOf(['info', 'error', 'success', 'warn']),
};

export default Alert;
