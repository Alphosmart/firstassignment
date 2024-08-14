// import React from 'react'

import Partners from './components/Partners/Partners';
import Navigation from './components/Navigation/Navigation';
import About from './components/Navigation/About/About';
import Herosection from './components/Hero_Section/HeroSection';
import Products from './components/Products/Products';

const App = () => {
  return (
    <>
      <Navigation />
      <Herosection />
      <Products />
      <About />
      <Partners />
    </>
  );
};

export default App;
