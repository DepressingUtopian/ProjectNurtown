import React, { useState } from 'react';
import ImageButton from './ImageButton'
import RightArrowIcon from '../resource/img/arrow-right.svg'
import LeftArrowIcon from '../resource/img/arrow-left.svg'

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
            <ImageButton backgroundImage={LeftArrowIcon} onClick={goPrevSlide} />
            <ImageButton backgroundImage={RightArrowIcon} onClick={goNextSlide} />
        </section>
    );
}

export default SliderSwitch;