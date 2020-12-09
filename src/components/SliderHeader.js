import React from 'react';
import TextHeader from './TextHeader';

class SliderHeader extends React.Component {
    render() {
        return (
        <section className='slider-header'>
            <TextHeader text="PROJECT" lineHeight="64px" fontSize="64px" color="#bdbdbd" fontStyle="normal" fontWeight="300"/>
            <TextHeader text="NURTOWN" lineHeight="64px" fontSize="64px" color="#333333" fontStyle="normal" fontWeight="bold"/>
        </section>
        );
    }
}

export default SliderHeader;