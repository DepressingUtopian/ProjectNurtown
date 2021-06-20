import React from 'react';
import './TextBlock.scss';

interface ITextBlockProps {
  styles?: React.CSSProperties;
  text: string;
}

const TextBlock = ({styles, text}: ITextBlockProps) => {
    return (<div className="text-block" style={styles}>{text}</div>);
}

export default TextBlock;