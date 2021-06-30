import React from 'react';
import Icon from './Icon'

import './ImageButton.scss';

interface IImageButtonProps {
  className?: string;
  backgroundImageUrl?: string;
  onClick?: () => void;
  buttonText?: string;
  icon: string;
  isBlack?: boolean;
  type?: 'button' | 'reset' | 'submit';
}

const ImageButton = ({ className, onClick, buttonText, icon, isBlack, type }: IImageButtonProps) => {

  return (
    <button type={type} className={`button-image ${className ? className : ''} ${isBlack ? 'black' : ''}`} onClick={onClick}>
      <div className='button-open-post-text'>{buttonText}</div>
      <Icon url={icon} width={24} height={24} />
    </button>
  );
}

export default ImageButton;