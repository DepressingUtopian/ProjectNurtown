import React from 'react';
import Menu from '../header/Menu';
import TextHeader from '../TextHeader';
import TextWithIcon from '../TextWithIcon';

import gpsImage from '../../resource/img/gps.svg'
import phoneImage from '../../resource/img/phone.svg'
import mailImage from '../../resource/img/mail.svg'
import twitterImage from '../../resource/img/twitter.svg'
import pininterestImage from '../../resource/img/pininterest.svg'
import linkedInImage from '../../resource/img/linked_in.svg'
import facebookImage from '../../resource/img/facebook.svg'
import logoImage from '../../resource/img/logo_white.svg';

import './Footer.scss';
import Icon from '../Icon';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer--bar">
        <Icon className="siteLogo" width={170} height={94} styles={{ margin: "0 0 0 116px" }} url={logoImage} />
        <div className="footer-menu">
          <TextHeader text="Информация" styles={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold" }}></TextHeader>
          <Menu></Menu>
        </div>
        <div className="contact-wrapper">
          <TextHeader text="Контакты" styles={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold" }}></TextHeader>
          <TextWithIcon
            text={`100000, Республика  Казахстан,\n г. Караганда, ул. Телевизионная 10`}
            stylesText={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold", marginLeft: '20px' }}
            iconProps={{ width: 11, height: 16, url: gpsImage }}
            className="gpsLogo" />
          <TextWithIcon
            text="+7 (701) 77 76 811"
            stylesText={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold", marginLeft: '20px' }}
            iconProps={{ width: 16, height: 16, url: phoneImage }}
            className="phoneLogo" />
          <TextWithIcon
            text="Galym.sultanov@mail.ru"
            stylesText={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold", marginLeft: '20px' }}
            iconProps={{ width: 16, height: 11, url: mailImage }}
            className="mailLogo" />
        </div>
        <div className="social-wrapper">
          <TextHeader text="Социальные сети" styles={{ lineHeight: "20px", fontSize: "16px", color: "white", fontStyle: "normal", fontWeight: "bold" }} />
          <div className="social-panel">
            <Icon className="facebookLogo" width={20} height={20} url={facebookImage} />
            <Icon className="twitterLogo" width={20} height={20} url={twitterImage} />
            <Icon className="linkedInLogo" width={20} height={20} url={linkedInImage} />
            <Icon className="pininterestImageLogo" width={20} height={20} url={pininterestImage} />
          </div>
        </div>
      </section>
      <section className="footer--copyright">
        <p className="footer--copyright__text">© {new Date().getFullYear()} Digital Project || DepressingUtopian. Все права защищены.</p>
      </section>
    </footer>
  );
}

export default Footer;