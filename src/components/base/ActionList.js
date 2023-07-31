import clsx from 'clsx';
import PropTypes from 'prop-types';

function ActionList({ width = 'auto', items }) {
  return (
    <ul className="ui-action-list" style={{ width }}>
      {items.map((item) => (
        <li role="presentation">
          <button
            type="button"
            className={clsx(
              'ui-action-list__item',
              item.active && 'ui-action-list__item--active',
            )}
            onClick={item.onClick}
          >
            {item.prefix && <span className="ui-action-list__item__prefix">{item.prefix}</span>}
            <span className="ui-action-list__item__label">{item.label}</span>
            {item.suffix && <span className="ui-action-list__item__suffix">{item.suffix}</span>}
          </button>
        </li>
      ))}
    </ul>
  );
}

ActionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    onClick: PropTypes.func.isRequired,
  })),
};

export default ActionList;
