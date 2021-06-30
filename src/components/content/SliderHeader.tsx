import React from 'react';
import TextHeader from '../TextHeader';

import './SliderHeader.scss';

const SliderHeader = () => {
  return (
    <div className='slider-header'>
      <TextHeader text="PROJECT" styles={{ lineHeight: "64px", fontSize: "64px", color: "#bdbdbd", fontStyle: "normal", fontWeight:300 }} />
      <TextHeader text="NURTOWN" styles={{ lineHeight: "64px", fontSize: "64px", color: "#333333", fontStyle: "normal", fontWeight: "bold" }} />
    </div>
  );
}

export default SliderHeader;