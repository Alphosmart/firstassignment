// import React from 'react'

import Info from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import Whatwedo from './components/Navigation/About/About';
import Herosection from './components/Hero_Section/Herosection';

const App = () => {
  return (
    <>
      <Navigation />
      <Herosection />
      <Info />
      <Whatwedo />
    </>
  );
};

export default App;
