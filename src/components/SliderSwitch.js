import React from 'react';
import ImageButton from './ImageButton'
import RightArrowIcon from '../resource/img/arrow-right.svg'
import LeftArrowIcon from '../resource/img/arrow-left.svg'

class SliderSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.currentPageNum = 0;
        this.goNextSlide = this.goNextSlide.bind(this);
    }

    goNextSlide() {
        console.log('Переключить на следующий слайд');
    }

    goPrevSlide() {
        console.log('Переключить на предыдущий слайд');
    }

    render() {
        return (
        <section className='slider-switch'>
            <ImageButton backgroundImage={LeftArrowIcon} onClick={this.goPrevSlide}/>
            <ImageButton backgroundImage={RightArrowIcon} onClick={this.goNextSlide}/> 
        </section>
        );
    }
}

export default SliderSwitch;