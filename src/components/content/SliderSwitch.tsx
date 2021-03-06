import React, { useState, useEffect } from 'react';
import ImageButton from '../ImageButton'
import RightArrowIcon from '../../resource/img/arrow-right.svg'
import LeftArrowIcon from '../../resource/img/arrow-left.svg'
import useInterval from '../../hooks/useInterval';

import './SliderSwitch.scss';

interface ISliderSwitch {
  onChangeSlide: (slideIndex: number) => number;
  slideIndex: number;
}

const SliderSwitch = ({ onChangeSlide, slideIndex }: ISliderSwitch) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(slideIndex);

  const goNextSlide = () => {
    const newIndex = onChangeSlide(currentSlideIndex + 1)
    setCurrentSlideIndex(newIndex);
  };

  const goPrevSlide = () => {
    const newIndex = onChangeSlide(currentSlideIndex - 1)
    setCurrentSlideIndex(newIndex);
  };

  const { stopInterval, restartInterval } = useInterval(() => goNextSlide(), 6000);

  return (
    <div className='slider-switch'>
      <ImageButton 
        className='slide-button' 
        icon={LeftArrowIcon}
        onClick={() => {
          goPrevSlide();
          restartInterval && restartInterval();
        }} />
      <ImageButton 
        className='slide-button'
        icon={RightArrowIcon}
        onClick={() => {
          goNextSlide();
          restartInterval && restartInterval();
          }} />
    </div>
  );
}

export default SliderSwitch;