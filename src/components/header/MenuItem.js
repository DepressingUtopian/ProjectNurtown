import React from 'react';

import './MenuItem.scss';

const MenuItem = ({linkUrl, content}) => {
    return (
        <a href={linkUrl}>{content}</a>
    );
}

export default MenuItem;