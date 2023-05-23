import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow.lazy';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import { MemeSVGThumbnail, MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';




function App() {

  // Gestion des memes
  const [meme, setMeme] = useState(emptyMeme)
  
  // Gestion des images
  const [imgs, setimgs] = useState([])

  // Gestion des memes
  const [memes, setmemes] = useState([])


  useEffect(() => {
    
    const promiseImg = fetch(`http://localhost:5689/images`)
    .then(response=>response.json());
    
    const promiseMeme = fetch(`http://localhost:5689/memes`)
    .then(response=>response.json());

    Promise.all([promiseImg,promiseMeme])
    .then(
      array => {
        setimgs(array[0]);
        setmemes(array[1]);
      }
    );

  }, [])

  return (
    <FlexH3Grow>
      <Header />
      <Navbar />
      {/* <MemeSVGThumbnail memes={memes} images={imgs} basePath=''/> */}
      <FlexW1Grow >
        <MemeSVGViewer meme={meme} image={imgs.find((img)=>img.id===meme.imageId)} basePath='' />
        <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
          setMeme(meme);
        }} />
      </FlexW1Grow>
      <Footer/>
    </FlexH3Grow>
  );
}

export default App;