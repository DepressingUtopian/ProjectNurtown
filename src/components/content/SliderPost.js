import React, { useEffect, useState } from 'react';
import ImageButton from '../ImageButton'
import ArrowRightIcon from '../../resource/img/arrow-right.svg'

import './SliderPost.scss';

const SliderPost = ({slideItem}) => {

    const urlToBackgroundStyle = (url) => { return `url(${slideItem.imgCoverUrl}) center / cover no-repeat no-repeat` };
    const [background, setBackground] = useState(urlToBackgroundStyle(slideItem.imgCoverUrl));
    useEffect(() => {
        const updateBackground = () => {
            console.log('Обнова');
            setBackground(urlToBackgroundStyle(slideItem.imgCoverUrl));
        };
        updateBackground();
    });
    return (
        <div className="slider-post">
            <div className='post-image' style={{background:background}}>
                <ImageButton className="button__open-post" buttonText="ВЗГЛЯНУТЬ" icon={ArrowRightIcon}></ImageButton>
            </div>
        </div>
    );
}

export default SliderPost;