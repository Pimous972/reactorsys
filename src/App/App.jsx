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
import { Route, Routes } from 'react-router-dom';
import { store } from "./store/store";
import MemeThumbnail from './pages/MemeThumbnail/MemeThumbnail';
import MemeEditor from './pages/MemeEditor/MemeEditor';


function App() {

  // Gestion des memes
  const [meme, setMeme] = useState(emptyMeme)
  
  return (
    <FlexH3Grow>
      <Header />
      <Navbar />
      
      <FlexW1Grow >
        <Routes>
          {/* <Route path='/create' element={
              <>
                <MemeSVGViewer meme={meme} image={imgs.find((img)=>img.id===meme.imageId)} basePath='' />
                <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
                  setMeme(meme);
                }} />
              </>
            } 
          /> */}
          <Route path='/create' element={<MemeEditor /> } />
          <Route path='/thumbnail' element={ <MemeThumbnail /> } />

        </Routes>        
      </FlexW1Grow>
      <Footer/>
    </FlexH3Grow>
  );
}

export default App;