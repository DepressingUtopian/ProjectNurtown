import React, { useState } from 'react';
import SliderHeader from './SliderHeader';
import SliderSwitch from './SliderSwitch';
import SlideNumberPad from './SlideNumberPad';
import SliderPost from './SliderPost';
import SlideItem from './SlideItem'

import './Slider.scss';

const imageUrls = [
    '/slides/2.jpg',
    '/slides/1.svg',
    '/slides/3.jpg',
    '/slides/4.jpg',
    '/slides/5.jpg',
    '/slides/6.jpg'

]

const Slider = () => {
    const slideItems = [];
    const initSlideItems = () => {
        imageUrls.forEach(element => {
            slideItems.push(new SlideItem(process.env.PUBLIC_URL + element, '#'));
        });
    }

    initSlideItems();
    const [currentSlideItem, setCurrentSlideItem] = useState(slideItems[0]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const onChangeSlide = (slideIndex) => {
        let newIndex = 0;
        if (slideIndex > slideItems.length - 1)
            newIndex = 0;
        else if (slideIndex < 0)
            newIndex = slideItems.length - 1;
        else
            newIndex = slideIndex;
        let item = slideItems[newIndex];
        setCurrentSlideItem(item);
        setCurrentSlideIndex(newIndex);
        return newIndex;
    }

    const normalizeNum = (num) => {
        return "0" + (num + 1);
    }
    return (
        <section className='slider block'>
            <SliderHeader />
            <SliderSwitch onChangeSlide={onChangeSlide} slideIndex={currentSlideIndex} />
            <SlideNumberPad leftNumber={normalizeNum(currentSlideIndex)} rightNumber={normalizeNum(slideItems.length - 1)} />
            <SliderPost slideItem={currentSlideItem} />
        </section>
    );
}

export default Slider;