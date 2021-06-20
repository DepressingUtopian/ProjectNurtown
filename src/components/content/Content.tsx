import React from 'react';
import Slider from './Slider';
import Post from './Post';
import Image from '../Image';
import TextBlock from "../TextBlock";
import Checkbox  from "../Checkbox";

import p_image_1 from '../../resource/img/post/p_img_1.png';
import p_image_2 from '../../resource/img/post/p_img_2.png';
import p_image_3 from '../../resource/img/post/p_img_3.png';
import one_image from '../../resource/img/post/1.svg';
import two_image from '../../resource/img/post/2.svg';

import our_proj_img1 from '../../resource/img/post/our-projects/1.svg';
import our_proj_img2 from '../../resource/img/post/our-projects/2.svg';
import our_proj_img3 from '../../resource/img/post/our-projects/3.svg';
import our_proj_img4 from '../../resource/img/post/our-projects/4.svg';
import our_proj_img5 from '../../resource/img/post/our-projects/5.svg';

import contact_us_img from '../../resource/img/post/our-projects/contact_us.png';


import ArrowRight from '../../resource/img/arrow-right.svg';

import ArrowRightWhite from '../../resource/img/arrow-right_white.svg';

import './Content.scss';

const Content = () => {
  const imageList = (
    <div className="image-list">
      <Image link={p_image_1} width='270px' height='265px' />
      <Image link={p_image_2} width='270px' height='140px' />
      <Image link={p_image_3} width='270px' height='345px' />
    </div>
  );

  const mainOurProjects = (
    <div className="inner-content">
      <Image link={our_proj_img1} width='570px' height='255px' />
      <Image link={our_proj_img2} width='570px' height='255px' />
      <Image link={our_proj_img3} width='270px' height='255px' />
      <Image link={our_proj_img4} width='470px' height='255px' />
      <Image link={our_proj_img5} width='370px' height='255px' />
    </div>
  );

  const mainTaskPost = (
    <div className="inner-content">
      <Image link={one_image} width='120px' height='144px' />
      <TextBlock text={"Создание комфортных условий и повышение качества обслуживания клиентов"} />
      <Image link={two_image} width='120px' height='144px' />
      <TextBlock text={"Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке"} />
    </div>
  );

  const contactUsPost = (
    <div className="inner-content">
      <form>
        <input type='text' placeholder='Имя' />
        <input type='text' placeholder='Номер телефона' required />
        <input type='text' placeholder='E-mail' required />
        <input type='text' placeholder='Интересующий товар/услуга' />
        <input type='text' className="input-message" placeholder='Сообщение' required />
        <Checkbox text="Отправляя заявку Вы соглашаетесь с политикой конфиденциальности"/>
      </form>
      <Image link={contact_us_img} width='749px' height='369px' />
    </div>
  );

  const textDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
  return (
    <section className='content'>
      <Slider />
      <Post icon={ArrowRight} className="about-company" customCoverBlock={imageList} textHeader='О компании' textDescription={textDescription} link='./' isViewButton={true} buttonText='ЧИТАТЬ' />
      <Post icon={ArrowRight} className="main-tasks" textHeader='Основные задачи'>
        {mainTaskPost}
      </Post>
      <Post icon={ArrowRightWhite} className="our-projects" textHeader='Наши проекты' link='./' isViewButton={true} buttonText='ВСЕ ПРОЕКТЫ'>
        {mainOurProjects}
      </Post>
      <Post icon={ArrowRightWhite} className="contact-us" textHeader='Связаться с нами' link='./' isViewButton={true} buttonText='ОТПРАВИТЬ'>
        {contactUsPost}
      </Post>
    </section>
  );
}

export default Content;