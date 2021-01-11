import React, { useEffect, useState } from 'react';
import ImageButton from '../ImageButton'
import Icon from '../Icon'
import ArrowRightIcon from '../../resource/img/arrow-right.svg'

const SliderPost = ({slideItem}) => {

    const urlToBackgroundStyle = (url) => { return `url(${slideItem.imgCoverUrl}) center no-repeat` };
    const [background, setBackground] = useState(urlToBackgroundStyle(slideItem.imgCoverUrl));
    useEffect(() => {
        const updateBackground = () => {
            console.log('Обнова');
            setBackground(urlToBackgroundStyle(slideItem.imgCoverUrl));
        };
        updateBackground();
    });

    const buttonElem =
        <div>
            <div className='button__open-post-text'>ВЗГЛЯНУТЬ</div>
            <Icon backgroundImage={ArrowRightIcon}></Icon>
        </div>;

    return (
        <div className="slider-post">
            <div className='post-image' style={{background:background}}>
                <ImageButton name="button__open-post" content={buttonElem}></ImageButton>
            </div>
        </div>
    );
}

export default SliderPost;