import React from 'react';

const Image = ({width, height, link}) => {
    const styles = {
        width:width,
        height:height,
        background:`url(${link}) center no-repeat`

    };
    return(
        <div className='image' style={styles}/>
    )
}

export default Image;