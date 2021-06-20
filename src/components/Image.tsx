import React from 'react';

interface IImageProps {
  width: string;
  height: string;
  link: string;
}

const Image = ({width, height, link}: IImageProps) => {
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