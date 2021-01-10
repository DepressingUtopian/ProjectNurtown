import React from 'react';

const TextHeader = ({styles, text}) => {
    return (<div className="text-header" style={styles}>{text}</div>);
}

export default TextHeader;