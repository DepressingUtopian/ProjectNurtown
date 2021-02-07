import React from 'react';

const TextBlock = ({styles, text}) => {
    return (<div className="text-block" style={styles}>{text}</div>);
}

export default TextBlock;