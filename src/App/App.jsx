import React, { useState } from 'react';
import './App.css';

import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow.lazy';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';




function App() {

  // Gestion des memes
  const [meme, setMeme] = useState(emptyMeme)
  
  // Gestion des images
  const [imgs, setimgs] = useState([])


  return (
    <FlexH3Grow>
      <Header />
      <Navbar />
      <FlexW1Grow >
        <MemeSVGViewer meme={meme} image={imgs.find((img)=>img.id===meme.imageId)} />
        <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
          setMeme(meme);
        }} />
      </FlexW1Grow>
      <Footer/>
    </FlexH3Grow>
  );
}

export default App;