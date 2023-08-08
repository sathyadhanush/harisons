import clsx from 'clsx';
import Icons from './Icons';
import IC_HARISONS from './img/ic_harisons.svg';
import IC_CALL from './img/ic_call.svg';
import IC_EMAIL from './img/ic_email.svg';

export const MENUS = [
  {
    label: 'Home',
    path: '#home',
    icon: Icons.Home,
  },
  {
    label: 'Services',
    path: '#services',
    icon: Icons.Home,
  },
  {
    label: 'Clients',
    path: '#clients',
    icon: Icons.Home,
  },
  {
    label: 'About',
    path: '#about',
    icon: Icons.Home,
  },
];

function AppNavbar({ route, setRoute }) {
  function getNavLinkClassName({ isActive }) {
    return clsx('ui-sidebar-nav__link', {
      'ui-sidebar-nav__link--active': isActive,
    });
  }
  return (
    <div className="ui-sidebar">
      <div className="ui-sidebar__header">
        <a
          href={MENUS[0].path}
          onClick={() => setRoute(MENUS[0].path)}
        >
          <img src={IC_HARISONS} alt="logo" width={100} />
        </a>
      </div>
      <div className="ui-sidebar-nav">
        <div className="flex" style={{ columnGap: '20px' }}>
          {MENUS.map((menu) => (
            <a
              className={getNavLinkClassName}
              href={menu.path}
              style={{
                color: route === menu.path ? '#FD0200' : 'gray',
              }}
              onClick={() => setRoute(menu.path)}
            >
              {menu.label}
            </a>
          ))}
        </div>
        <div className="flex">
          <a href="#contact" className="flex" style={{ alignItems: 'center' }}>
            <img src={IC_CALL} style={{ width: '25px', paddingRight: '5px' }} alt="" />
            <div className="ui-sidebar-nav__link" style={{ color: 'gray' }}>Call me</div>
          </a>
          <a href="#footer" className="flex" style={{ paddingLeft: '20px', alignItems: 'center' }}>
            <img src={IC_EMAIL} style={{ width: '25px', paddingRight: '5px' }} alt="" />
            <div className="ui-sidebar-nav__link" style={{ color: 'gray' }}>Email us</div>
          </a>
        </div>
        {/* <ul className="ui-nav" /> */}
      </div>
    </div>
  );
}

export default AppNavbar;
