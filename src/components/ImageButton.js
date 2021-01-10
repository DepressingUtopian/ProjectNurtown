import React from 'react';

const ImageButton = ({name, backgroundImage, onClick, content}) => {
    const className = (name !== undefined) ? name : 'button-image';
    const styles = {background:(backgroundImage !== undefined) ?
        `url(${backgroundImage}) center no-repeat` : ''};

    return (
        <button className={className} style={styles} onClick={onClick}> {content}</button>
    );
}

export default ImageButton;