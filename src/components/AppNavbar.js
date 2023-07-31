import clsx from 'clsx';
import Icons from './Icons';
import LogoImg from './img/logo1.svg';

const MENUS = [
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

function AppNavbar() {
  function getNavLinkClassName({ isActive }) {
    return clsx('ui-sidebar-nav__link', {
      'ui-sidebar-nav__link--active': isActive,
    });
  }

  return (
    <div className="ui-sidebar">
      <div className="ui-sidebar__header">
        <img src={LogoImg} alt="logo" width={100} />
      </div>
      <div className="ui-sidebar-nav">
        {MENUS.map((menu) => (
          <a
            className={getNavLinkClassName}
            href={menu.path}
            style={{ color: 'gray' }}
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
