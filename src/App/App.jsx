import React, {useState,useEffect} from 'react';
import './App.css';
import { MemeSVGViewer, emptyMeme} from 'orsys-tjs-meme';
import Button from '../components/ui/Button/Button';

function App() {

  const [counter, setcounter] = useState(0);
  
  useEffect(() => {
    console.log('valeur étatique : ' + counter)
    // return () => {
      
    // };
  }, [counter]);



  return (
    <div className="App">
     
      <div> Compteur  : {counter}</div>

      <Button
        type='button'
        title="-1"
        onButtonClick={(message)=>{
          setcounter(counter-1);
          console.log('valeur dans fonction : ' + counter);
        }}
      />         
      
      <Button        
        type='button'
        title="+1"
        onButtonClick={(message)=>{
          setcounter(counter+1);
          console.log('valeur dans fonction : ' + counter);
        }}
      />
       
      
    </div>
  );
}

export default App;