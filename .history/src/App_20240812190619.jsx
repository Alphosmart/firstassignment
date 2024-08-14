// import React from 'react'

import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import About from './components/Navigation/About/About';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Herosection/Herosection';

const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Products />
      <About />
      <Partners />
      <Footer />
    </>
  );
};

export default App;
