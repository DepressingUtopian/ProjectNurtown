import React from 'react';
import Logo from '../Logo';
import Menu from '../header/Menu';
import TextHeader from '../TextHeader';
import TextWithLogo from '../TextWithLogo';

import gpsImage from '../../resource/img/gps.svg'
import phoneImage from '../../resource/img/phone.svg'
import mailImage from '../../resource/img/mail.svg'
import twitterImage from '../../resource/img/twitter.svg'
import pininterestImage from '../../resource/img/pininterest.svg'
import linkedInImage from '../../resource/img/linked_in.svg'
import facebookImage from '../../resource/img/facebook.svg'
import logoImage from '../../resource/img/logo_white.svg';

const Footer = () => {
    return (
        <section className="footer">
            <section className="footer--bar">
                <Logo className="siteLogo" width="170px" height="94px" margin="0 0 0 116px" imageUrl={logoImage}></Logo>
                <div className="footer-menu">
                    <TextHeader text="Информация" styles={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold" }}></TextHeader>
                    <Menu></Menu>
                </div>
                <div className="contact-wrapper">
                    <TextHeader text="Контакты" styles={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold" }}></TextHeader>
                    <TextWithLogo
                        text="100000, Республика  Казахстан, <br />  г. Караганда, ул. Телевизионная 10"
                        stylesText={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold", marginLeft: '20px' }}
                        stylesLogo={{ width: "70px", height: "44px", imageUrl: gpsImage }}
                        classNameLogo="gpsLogo" />
                    <TextWithLogo
                        text="+7 (701) 77 76 811"
                        stylesText={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold", marginLeft: '20px' }}
                        stylesLogo={{ width: "70px", height: "44px", imageUrl: phoneImage }}
                        classNameLogo="phoneLogo" />
                    <TextWithLogo
                        text="Galym.sultanov@mail.ru"
                        stylesText={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold", marginLeft: '20px' }}
                        stylesLogo={{ width: "70px", height: "44px", imageUrl: mailImage }}
                        classNameLogo="mailLogo" />
                </div>
                <div className="social-wrapper">
                    <TextHeader text="Социальные сети" styles={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold" }} />
                    <div className="social-panel">
                        <Logo className="facebookLogo" width="20px" height="20px" margin="0 0 0 0" imageUrl={facebookImage}></Logo>
                        <Logo className="twitterLogo" width="20px" height="20px" margin="0 0 0 0" imageUrl={twitterImage}></Logo>
                        <Logo className="linkedInLogo" width="20px" height="20px" margin="0 0 0 0" imageUrl={linkedInImage}></Logo>
                        <Logo className="pininterestImageLogo" width="20px" height="20px" margin="0 0 0 0" imageUrl={pininterestImage}></Logo>
                    </div>
                </div>
            </section>
            <section className="footer--copyright">
                <p className="footer--copyright__text">© {new Date().getFullYear()} Digital Project || DepressingUtopian. Все права защищены.</p>
            </section>
        </section>
    );
}

export default Footer;