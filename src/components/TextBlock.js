import React from 'react';
import './TextBlock.scss';

const TextBlock = ({styles, text}) => {
    return (<div className="text-block" style={styles}>{text}</div>);
}

export default TextBlock;