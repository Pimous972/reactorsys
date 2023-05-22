import React from 'react';
import './App.css';
import { MemeSVGViewer, emptyMeme} from 'orsys-tjs-meme';
import Button from '../components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      <Button
        type='submit'
        title="Prendre en compte"
        onButtonClick={(message)=>{
          console.log(message);
        }}
      >
        Prendre en compte        
      </Button>      
    </div>
  );
}

export default App;