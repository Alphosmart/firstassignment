// import React from 'react'

import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import About from './components/Navigation/About/About';
import Herosection from './components/Hero_Section/Herosection';
import Products from './components/Products/Products';

const App = () => {
  return (
    <>
      <Navigation />
      <Herosection />
      <Products />
      <About />
      <Contact />
    </>
  );
};

export default App;
