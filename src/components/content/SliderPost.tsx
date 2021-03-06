import React, { useEffect, useState } from 'react';
import ImageButton from '../ImageButton'
import ArrowRightIcon from '../../resource/img/arrow-right.svg'

import './SliderPost.scss';

import SlideItem from './SlideItem';

interface ISliderPost {
  slideItem: SlideItem;
}

const SliderPost = ({ slideItem }: ISliderPost) => {

  const urlToBackgroundStyle = (url: string) => { return `url(${slideItem.imgCoverUrl}) center / cover no-repeat no-repeat` };
  const [background, setBackground] = useState(urlToBackgroundStyle(slideItem.imgCoverUrl));
  useEffect(() => {
    const updateBackground = () => {
      setBackground(urlToBackgroundStyle(slideItem.imgCoverUrl));
    };
    updateBackground();
  });
  return (
    <div className="slider-post">
      <div className='post-image' style={{ background: background }}>
        <ImageButton className="button-open-post" buttonText="ВЗГЛЯНУТЬ" icon={ArrowRightIcon}></ImageButton>
      </div>
    </div>
  );
}

export default SliderPost;