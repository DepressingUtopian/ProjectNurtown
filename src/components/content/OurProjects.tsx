import React from "react";
import ImageButton from "../ImageButton";
import TextHeader from "../TextHeader";
import Post from "./Post";
import Image from '../Image';

import OurProjectIMG1 from '../../resource/img/post/our-projects/1.svg';
import OurProjectIMG2 from '../../resource/img/post/our-projects/2.svg';
import OurProjectIMG3 from '../../resource/img/post/our-projects/3.svg';
import OurProjectIMG4 from '../../resource/img/post/our-projects/4.svg';
import OurProjectIMG5 from '../../resource/img/post/our-projects/5.svg';

import ArrowRightWhite from '../../resource/img/arrow-right_white.svg';

import './OurProjects.scss';

const OurProjects = () => (
  <Post className="our-projects">
    <TextHeader text='Наши проекты' />
    <div className="our-projects-images">
      <div className="images-group">
        <Image link={OurProjectIMG1} />
        <Image link={OurProjectIMG2} />
      </div>
      <div className="images-group">
        <Image link={OurProjectIMG3} className="small" />
        <Image link={OurProjectIMG4} />
        <Image link={OurProjectIMG5} />
      </div>
    </div>
    <ImageButton className="button-open-post" icon={ArrowRightWhite} buttonText='ВСЕ ПРОЕКТЫ' isBlack />
  </Post>
);

export default OurProjects;