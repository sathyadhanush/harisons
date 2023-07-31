import clsx from 'clsx';

import 'src/scss/tabs.scss';

function Tabs({
  items,
  onChange,
  activeItemKey = null,
  isRounded = false,
}) {
  return (
    <div className={clsx('ui-tabs', {
      'ui-tabs--rounded': isRounded,
    })}
    >
      {items.map((item) => (
        <div
          className={clsx('ui-tabs__item', {
            'ui-tabs__item--active': activeItemKey === item.key,
          })}
          onClick={() => onChange(item)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
