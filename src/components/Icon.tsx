import React from 'react';

import './Icon.scss';

export interface IIconProps {
  url: string;
  width: number;
  height: number;
  className?: string;
  styles?: React.CSSProperties;
}

const Icon = ({ url, width, height, className, styles }: IIconProps) => {
    return (
      <object className={`icon ${className}`}  type="image/svg+xml" data={url} width={width} height={height} style={styles} >
        Your browser does not support SVG
      </object>
    );
}

export default Icon;