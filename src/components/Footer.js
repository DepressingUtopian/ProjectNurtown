import React from 'react';
import Logo from './Logo';
import logoImage from '../resource/img/logo_white.svg';

class Footer extends React.Component {
    render() {
        return (
        <section class="footer">
            <section class="footer--bar">
                <Logo className="siteLogo" width="145px" height="94px" margin="58px 0 0 116px" imageUrl={logoImage}></Logo>
            </section>
            <section class="footer--copyright">

            </section>
        </section>
        );
    }
}

export default Footer;