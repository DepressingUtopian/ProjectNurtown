import React from 'react';

import Content from './components/content/Content';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './css/reset.css';

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
