import React, {useState} from 'react';
import './App.css';
import { MemeSVGViewer, emptyMeme} from 'orsys-tjs-meme';
import Button from '../components/ui/Button/Button';

function App() {

  const [counter, setcounter] = useState(0);

  return (
    <div className="App">
      
      <div> Compteur  : {counter}</div>

      <Button
        type='button'
        title="-1"
        onButtonClick={(message)=>{
          setcounter(counter-1);
          console.log(counter);
        }}
      />         
      
      <Button        
        type='button'
        title="+1"
        onButtonClick={(message)=>{
          setcounter(counter+1);
          console.log(counter);
        }}
      />
       
      
    </div>
  );
}

export default App;