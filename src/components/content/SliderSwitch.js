import React, { useState } from 'react';
import ImageButton from '../ImageButton'
import RightArrowIcon from '../../resource/img/arrow-right.svg'
import LeftArrowIcon from '../../resource/img/arrow-left.svg'

import './SliderSwitch.scss';

const SliderSwitch = ({onChangeSlide, slideIndex}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(slideIndex);
    const goNextSlide = () => {
        console.log('Переключить на следующий слайд');
        const newIndex = onChangeSlide(currentSlideIndex + 1)
        setCurrentSlideIndex(newIndex);
    };

    const goPrevSlide = () => {
        console.log('Переключить на предыдущий слайд');
        const newIndex = onChangeSlide(currentSlideIndex - 1)
        setCurrentSlideIndex(newIndex);
    };
    return (
        <section className='slider-switch'>
            <ImageButton className='slide-button' backgroundImage={LeftArrowIcon} onClick={goPrevSlide} />
            <ImageButton className='slide-button' backgroundImage={RightArrowIcon} onClick={goNextSlide} />
        </section>
    );
}

export default SliderSwitch;