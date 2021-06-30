import React from 'react';

import Slider from './Slider';
import AboutCompany from './AboutCompany';
import OurProjects from './OurProjects';
import MainTasks from './MainTasks';
import ContactUs from './ContactUs';

import './Content.scss';

const Content = () => (
    <section className='content'>
      <Slider />
      <AboutCompany />
      <MainTasks />
      <OurProjects />
      <ContactUs />
    </section>
  );

export default Content;