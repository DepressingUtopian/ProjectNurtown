import React from 'react';
import Icon from './Icon'

const ImageButton = ({className, backgroundImage, onClick, buttonText, icon}) => {
    const buttonElem =
        <>
            <div className='button__open-post-text'>{buttonText}</div>
            <Icon backgroundImage={icon}></Icon>
        </>;
    const styles = {background:(backgroundImage !== undefined) ?
        `url(${backgroundImage}) center no-repeat` : ''};

    return (
        <button className={`button-image ${className ? className : ''}`} style={styles} onClick={onClick}> {buttonElem}</button>
    );
}

export default ImageButton;