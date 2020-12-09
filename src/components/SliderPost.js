import React from 'react';
import ImageButton from './ImageButton'
import Icon from './Icon'
import ArrowRightIcon from '../resource/img/arrow-right.svg'

class SliderPost extends React.Component {

    styles = {
        background:''
    }

    render() {
        this.styles.background = `url(${this.props.backgroundImage}) center no-repeat`;
        let buttonElem = 
        <div>
            <div className='button__open-post-text'>ВЗГЛЯНУТЬ</div>
            <Icon backgroundImage={ArrowRightIcon}></Icon>
        </div>;

        return (
            <div className="slider-post">
                 <div className='post-image' style={this.styles}>
                    <ImageButton className="button__open-post" content={buttonElem}></ImageButton>
                 </div>
            </div>     
        );
    }
}

export default SliderPost;