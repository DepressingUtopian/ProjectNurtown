import React, { useState, useEffect } from 'react';
import ImageButton from '../ImageButton'
import RightArrowIcon from '../../resource/img/arrow-right.svg'
import LeftArrowIcon from '../../resource/img/arrow-left.svg'

import './SliderSwitch.scss';

interface ISliderSwitch {
  onChangeSlide: (slideIndex: number) => number;
  slideIndex: number;
}

const SliderSwitch = ({ onChangeSlide, slideIndex }: ISliderSwitch) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(slideIndex);

  useEffect(() => {
    const timerId = setInterval(() => goNextSlide(), 6000);

    // return () => clearInterval(timerId);
  }, []);

  const goNextSlide = () => {
    const newIndex = onChangeSlide(currentSlideIndex + 1)
    setCurrentSlideIndex(newIndex);
  };

  const goPrevSlide = () => {
    const newIndex = onChangeSlide(currentSlideIndex - 1)
    setCurrentSlideIndex(newIndex);
  };
  return (
    <section className='slider-switch'>
      <ImageButton className='slide-button' icon={LeftArrowIcon} onClick={goPrevSlide} />
      <ImageButton className='slide-button' icon={RightArrowIcon} onClick={goNextSlide} />
    </section>
  );
}

export default SliderSwitch;