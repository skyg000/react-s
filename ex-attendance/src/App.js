
import './App.css';
import List from './page/List'
import Write from './page/Write'
import Mycontxt from './Mycontxt';
import { useRef } from 'react';
function App() {
  let wrbo = useRef();
  // wrbo.current.classList.toggle('active')
  
  let pop = (e)=> {
    e.preventDefault();
    wrbo.current.classList.toggle('active')
  }
  
  return (
      <Mycontxt>
         <a href="" onClick={pop}> + </a> 
        <List pop = { pop }/>
        <Write wrbo={wrbo} />
      </Mycontxt>
    
  );
}

export default App;
