import React from 'react';

import './MenuItem.scss';

interface IMenuItem {
  linkUrl: string;
  content: string;
}

const MenuItem = ({linkUrl, content}: IMenuItem ) => {
    return (
        <a href={linkUrl}>{content}</a>
    );
}

export default MenuItem;