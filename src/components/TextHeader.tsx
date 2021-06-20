import React from 'react';

import './TextHeader.scss';

interface ITextHeaderProps {
  styles?: React.CSSProperties;
  text?: string;
}

const TextHeader = ({styles, text}: ITextHeaderProps) => {
    return (<div className="text-header" style={styles}>{text}</div>);
}

export default TextHeader;