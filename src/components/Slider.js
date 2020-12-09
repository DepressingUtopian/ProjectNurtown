import React from 'react';
import SliderHeader from './SliderHeader';
import SliderSwitch from './SliderSwitch';
import SlideNumberPad from './SlideNumberPad';
import SliderPost from './SliderPost';
import ImagePost from '../resource/img/post-img.svg'
import SlideItem from './SlideItem'

const imageUrls = [
    'src/resource/img/slides/1.svg',
    'src/resource/img/slides/2.jpg',
    'src/resource/img/slides/3.jpg',
    'src/resource/img/slides/4.jpg',
    'src/resource/img/slides/5.jpg',
    'src/resource/img/slides/6.jpg'

]

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.slideItems = [];
        this.initSlideItems.call(this);


    }

    initSlideItems() {
        imageUrls.forEach(element => {
            this.slideItems.push( new SlideItem(element,'#'));
        });
        
    }

    render() {
        return (
        <section className='slider'>
           <SliderHeader/>
           <SliderSwitch/>
           <SlideNumberPad leftNumber="01" rightNumber="02"/>
           <SliderPost backgroundImage={ImagePost}/>
        </section>
        );
    }
}

export default Slider;