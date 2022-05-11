
import { ImageContainer } from './components/Image-container';
import { Menu } from './components/Menu';
import { useState } from 'react';

function Home() {

  return (
    <div className="Home-container">
      <h1 className={"topic"}>Topic</h1> 
      <ImageContainer />
      <Menu />
    </div>
  );
}

export default Home;
