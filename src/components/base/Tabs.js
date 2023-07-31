import clsx from 'clsx';

function Tabs({
  tabs, onChange, activeTab, isRounded = false,
}) {
  return (
    <div className={clsx('ui-tabs', {
      'ui-tabs--rounded': isRounded,
    })}
    >
      {tabs.map((tab) => (
        <div
          className={clsx('ui-tabs__tab', {
            'ui-tabs__tab--active': activeTab === tab,
          })}
          onClick={() => onChange(tab)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
