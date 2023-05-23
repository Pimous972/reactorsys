import React from 'react';
import './App.css';

import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow.lazy';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';


function App() {

  return (
    <FlexH3Grow>
      <Header />
      <Navbar />
      <FlexW1Grow >
        <MemeSVGViewer meme={emptyMeme} image={undefined} />
        <MemeForm />
      </FlexW1Grow>
      <Footer/>
    </FlexH3Grow>
  );
}

export default App;