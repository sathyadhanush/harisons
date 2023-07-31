import clsx from 'clsx';
import { noop } from 'lodash';

import 'components/scss/Menu.scss';

function Menu({
  header,
  width = 'auto',
  items = [],
  activeItem = null,
  footer = null,
  onClick = noop,
}) {
  function renderItem(item) {
    return (
      <li
        className={clsx('ui-menu__item', {
          'ui-menu__item--active': activeItem === item,
          'ui-menu__item--critical': item.isCritical,
        })}
        onClick={() => onClick(item)}
      >
        {item.icon}
        {' '}
        {item.label}
      </li>
    );
  }

  return (
    <div className="ui-menu" style={{ width }}>
      {header && <div className="ui-menu__header">{header}</div>}
      <ul className="ui-menu__list">
        {items.map(renderItem)}
      </ul>
      {footer && <div className="ui-menu__footer">{footer}</div>}
    </div>
  );
}

export default Menu;
