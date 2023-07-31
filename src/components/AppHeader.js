import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from 'src/components-new/button';
import Tabs from 'src/components-new/tabs';
import TopBarUserMenu from './TopBarUserMenu';
import Tooltip from './Tooltip';

function useHeader(options) {
  useEffect(() => {
    window.getApp()?.setHeader(options);
    return () => {
      window.getApp()?.setHeader(null);
    };
  });
}

function AppHeader({
  title,
  tabs,
  actions,
  onBack,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function renderChildTabs() {
    return (
      <Tabs
        onChange={(tab) => navigate(tab.path)}
        items={tabs.map((t) => ({ ...t, key: t.path }))}
        activeItemKey={tabs.find((tab) => tab.path === pathname)?.path}
      />
    );
  }

  function renderTitle() {
    return (
      <div className="ui-header-title" style={{ columnGap: '10px' }}>
        {onBack && (
          <Tooltip title="Go back">
            <Button
              className="ui-header__back"
              icon={<ion-icon name="arrow-back-outline" />}
              onClick={onBack}
            />
          </Tooltip>
        )}
        {title}
      </div>
    );
  }

  function renderLeftContent() {
    if (title) {
      return renderTitle();
    }
    if (tabs && tabs.length > 1) {
      return renderChildTabs();
    }
    return null;
  }

  function renderRightContent() {
    if (actions) {
      return actions;
    }
    return (
      <TopBarUserMenu />
    );
  }

  return (
    <div className="ui-header">
      <div className="ui-header__left">
        {renderLeftContent()}
      </div>
      <div className="ui-header__right">
        {renderRightContent()}
      </div>
    </div>
  );
}

export default AppHeader;
export { useHeader };
