import React from 'react';

const Icon = ({ url, width, height, className }) => {
    return (
      <object className="icon" className={className} type="image/svg+xml" data={url} width={width} height={height} >
        Your browser does not support SVG
      </object>
    );
}

export default Icon;