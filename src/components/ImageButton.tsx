import React from 'react';
import Icon from './Icon'

import './ImageButton.scss';

interface IImageButtonProps {
  className?: string;
  backgroundImageUrl?: string;
  onClick?: () => void;
  buttonText?: string;
  icon: string;
}

const ImageButton = ({className, onClick, buttonText, icon}: IImageButtonProps) => {
    const buttonElem =
        (<React.Fragment>
            <div className='button__open-post-text'>{buttonText}</div>
            <Icon url={icon} width={24} height={24}/>
        </React.Fragment>);
 
    return (
        <button className={`button-image ${className ? className : ''}`} onClick={onClick}> {buttonElem}</button>
    );
}

export default ImageButton;