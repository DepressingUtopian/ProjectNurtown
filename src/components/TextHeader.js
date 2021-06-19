import React from 'react';

import './TextHeader.scss';

const TextHeader = ({styles, text}) => {
    return (<div className="text-header" style={styles}>{text}</div>);
}

export default TextHeader;