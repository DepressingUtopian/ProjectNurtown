import React from 'react';

import './Icon.scss';

export interface IIconProps {
  url: string;
  width?: number;
  height?: number;
  className?: string;
  styles?: React.CSSProperties;
}

const Icon = ({ url, width, height, className, styles }: IIconProps) => {
  return (
    <img className={`icon ${className ? className : ''}`} src={url} width={width} height={height} style={styles}/>
  );
}

      export default Icon;