import React from 'react';
import Logo from './Logo';

const TextWithLogo = ({classNameLogo, stylesText, stylesLogo, text}) => {
    return (
        <div className="text-with-logo">
            <Logo className={classNameLogo} width="16px" height="16px" imageUrl={stylesLogo.imageUrl} />
            <div className="text" style={stylesText}>{text}</div>
        </div>
    )
}

export default TextWithLogo;