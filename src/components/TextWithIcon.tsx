import React from 'react';
import Icon, { IIconProps } from './Icon';

interface ITextWithIcon {
  className?: string;
  stylesText: React.CSSProperties;
  iconProps: IIconProps;
  text: string;
}

const TextWithIcon = ({className, stylesText, iconProps, text}: ITextWithIcon) => {
    return (
        <div className="text-with-logo">
            <Icon {...iconProps}/>
            <div className="text" style={stylesText}>{text}</div>
        </div>
    )
}

export default TextWithIcon;