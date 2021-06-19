import React from 'react';
import Icon from './Icon'

import './ImageButton.scss';

const ImageButton = ({className, backgroundImage, onClick, buttonText, icon}) => {
    const buttonElem =
        (<React.Fragment>
            <div className='button__open-post-text'>{buttonText}</div>
            <Icon url={icon} width={24} height={24}/>
        </React.Fragment>);
    const styles = {background:(backgroundImage !== undefined) ?
        `url(${backgroundImage}) center no-repeat` : ''};

    return (
        <button className={`button-image ${className ? className : ''}`} style={styles} onClick={onClick}> {buttonElem}</button>
    );
}

export default ImageButton;