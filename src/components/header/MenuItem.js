import React from 'react';

const MenuItem = ({linkUrl, content}) => {
    return (
        <a href={linkUrl}>{content}</a>
    );
}

export default MenuItem;