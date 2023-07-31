import cx, { clsx } from 'clsx';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icons from './Icons';

function AppTabHeader({ className, menus }) {
  return (
    <div className="ui-header">
      <div className="ui-header__tabs" />
    </div>
  );
}

export default AppTabHeader;
