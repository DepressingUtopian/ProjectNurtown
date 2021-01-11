import React from 'react';
import Logo from '../Logo';
import Menu from './Menu';
import logoImage from '../../resource/img/logo.svg'

const Header = () => {
    return (
        <section className='header'>
            <Logo className="siteLogo" width="70px" height="44px" imageUrl={logoImage}></Logo>
            <Menu />
        </section>
    );
}

export default Header;