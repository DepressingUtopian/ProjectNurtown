import React from "react";
import ImageButton from "../ImageButton";
import TextBlock from "../TextBlock";
import TextHeader from "../TextHeader";
import Image from '../Image';
import Post from "./Post";

import AboutCompanyIMG1 from '../../resource/img/post/p_img_1.png';
import AboutCompanyIMG2 from '../../resource/img/post/p_img_2.png';
import AboutCompanyIMG3 from '../../resource/img/post/p_img_3.png';

import ArrowRight from '../../resource/img/arrow-right.svg';

import './AboutCompany.scss';

const textDescription = 'Lorem Ipsum is simply dummy text of the printing' +
  'and typesetting industry. Lorem Ipsum has been the industrys standard dummy' +
  'text ever since the 1500s, when an unknown printer took a galley of type and scrambled' +
  'it to make a type specimen book. It has survived not only five centuries, but also the leap' +
  'into electronic typesetting, remaining essentially unchanged.';

  const aboutCompanyImageList = (
    <div className="about-company-cover">
      <div className="images-group">
        <Image link={AboutCompanyIMG1} height="265px"/>
        <Image link={AboutCompanyIMG2} height="140px"/>
      </div>
      <div className="images-group">
        <Image link={AboutCompanyIMG3} height="345px"/>
      </div>
    </div>
  );

const AboutCompany = () => (
  <Post className="about-company" customCoverBlock={aboutCompanyImageList}>
    <TextHeader text='О компании' />
    <TextBlock text={textDescription} />
    <ImageButton className="button-open-post" icon={ArrowRight} buttonText='ЧИТАТЬ' />
  </Post>
);

export default AboutCompany;