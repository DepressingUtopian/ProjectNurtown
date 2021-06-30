import React from 'react';
import Menu from './Menu';
import logoImage from '../../resource/img/logo.svg'

import Icon from '../Icon';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Icon className="siteLogo" url={logoImage} />
      <Menu />
    </header>
  );
}

export default Header;