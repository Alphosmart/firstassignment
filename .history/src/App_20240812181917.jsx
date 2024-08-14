// import React from 'react'

import Navigation from './components/Navigation/Navigation';
// import HeroSection from './components/Herosection/HeroSection';
import Products from './components/Products/Products';
import About from './components/Navigation/About/About';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      {/* <HeroSection /> */}
      <Products />
      <About />
      <Partners />
      <Footer />
    </>
  );
};

export default App;
