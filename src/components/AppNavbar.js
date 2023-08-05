import clsx from 'clsx';
import Icons from './Icons';
import IC_HARISONS from './img/ic_harisons.svg';

export const MENUS = [
  {
    label: 'Home',
    path: '#home',
    icon: Icons.Home,
  },
  {
    label: 'Products',
    path: '#products',
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
  {
    label: 'Contact',
    path: '#contact',
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
        <ul className="ui-nav" />
      </div>
    </div>
  );
}

export default AppNavbar;
