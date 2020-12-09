import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><MenuItem linkUrl="./" content="ГЛАВНАЯ" /></li>
                    <li><MenuItem linkUrl="./" content="ГАЛЕРЕЯ" /></li>
                    <li><MenuItem linkUrl="./" content="ПРОЕКТЫ" /></li>
                    <li><MenuItem linkUrl="./" content="СЕРТИФИКАТЫ" /></li>
                    <li><MenuItem linkUrl="./" content="КОНТАКТЫ" /></li>
                </ul>
            </div>
        );
    }
}

export default Menu;