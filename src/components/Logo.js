import React from 'react';

const Logo = ({className, width, height, margin, imageUrl}) => {
    const styles = {
        width: width,
        height: height,
        background: `url(${imageUrl}) center no-repeat`,
        margin: margin,
        backgroundRepeat: 'no-repeat',
        display: 'inline-block'
    }
    return (<div className={className} style={styles}></div>);
}

export default Logo;