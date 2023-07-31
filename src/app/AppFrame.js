import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from 'components/AppNavbar';
import Loading from 'components/base/Loading';

let instance = null;

window.getApp = () => instance;

function AppFrame({ tabs }) {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    instance = {
      setHeader,
    };
  });

  return (
    <div className="flex-column h-full">
      <AppNavbar />
      <div className="w-full">
        {/* <AppHeader
          onBack={header?.onBack}
          tabs={tabs}
          title={header?.title}
          actions={header?.actions}
        /> */}
        <div className="ui-app__content">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default AppFrame;
