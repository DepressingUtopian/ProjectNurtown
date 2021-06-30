import React from 'react';

import './Image.scss';

interface IImageProps {
  className?: string;
  width?: string;
  height?: string;
  link: string;
  styles?: React.CSSProperties;
}

const Image = ({className, width, height, link, styles}: IImageProps) => {
    const customStyles = {
        width:width,
        height:height,
        backgroundImage:`url(${link})`,
        ...styles
    };
    return(
        <div className={`image ${className ? className : ''}`} style={customStyles} />
    )
}

export default Image;