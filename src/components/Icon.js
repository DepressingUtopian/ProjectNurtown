import React from 'react';

const Icon = ({ backgroundImage }) => {
    const styles = {
        background: (backgroundImage !== undefined) ?
            `url(${backgroundImage}) center no-repeat` : ''
    };
    return (
        <div className="icon" style={styles}></div>
    );
}

export default Icon;