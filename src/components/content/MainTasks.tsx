import React from "react";
import TextBlock from "../TextBlock";
import TextHeader from "../TextHeader";
import Post from "./Post";
import Image from "../Image";

import MainTaskIMG1 from '../../resource/img/post/1.svg';
import MainTaskIMG2 from '../../resource/img/post/2.svg';

import './MainTasks.scss';

const MainTasks = () => (
  <Post className="main-tasks">
    <TextHeader text='Основные задачи' />
    <div className="main-task-content">
      <Image link={MainTaskIMG1} width='120px' height='144px' />
      <TextBlock text={"Создание комфортных условий и повышение качества обслуживания клиентов"} />
      <Image link={MainTaskIMG2} width='120px' height='144px' />
      <TextBlock text={"Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке"} />
    </div>
  </Post>
);

export default MainTasks;