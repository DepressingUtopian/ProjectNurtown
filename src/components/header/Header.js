import React from 'react';
import Logo from '../Logo';
import Menu from './Menu';
import logoImage from '../../resource/img/logo.svg'

import Icon from '../Icon';

import './Header.scss';

const Header = () => {
    return (
        <section className='header'>
            <Icon className="siteLogo" url={logoImage} width="70" height="44"/>
            <Menu />
        </section>
    );
}

export default Header;