import React, { useState } from 'react';
import MenuItem from './MenuItem';

import './Menu.scss';

const Menu = () => {
    const [currentMenuItem, setCurrentMenuItem] = useState<EventTarget>();
    console.log(currentMenuItem);
    const onClickHandler = (event: React.MouseEvent) => {
      setCurrentMenuItem(event.target);
    }
    
    return (
        <menu className="menu">
            <ul onClick={(event) => onClickHandler(event)}>
                <li><MenuItem linkUrl="./" content="ГЛАВНАЯ" /></li>
                <li><MenuItem linkUrl="./" content="ГАЛЕРЕЯ" /></li>
                <li><MenuItem linkUrl="./" content="ПРОЕКТЫ" /></li>
                <li><MenuItem linkUrl="./" content="СЕРТИФИКАТЫ" /></li>
                <li><MenuItem linkUrl="./" content="КОНТАКТЫ" /></li>
            </ul>
        </menu>
    );
}

export default Menu;