import React from 'react';
import TextHeader from './TextHeader';

const SliderHeader = () => {
        return (
            <section className='slider-header'>
                <TextHeader text="PROJECT" styles={{lineHeight:"64px", fontSize:"64px", color:"#bdbdbd", fontStyle:"normal", fontWeight:"300"}}/>
                <TextHeader text="NURTOWN" styles={{lineHeight:"64px", fontSize:"64px", color:"#333333", fontStyle:"normal", fontWeight:"bold"}}/>
            </section>
        );
}

export default SliderHeader;