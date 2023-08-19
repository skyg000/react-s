import { useRef } from 'react';
import {Mycontxt } from './Mycontxt';
import './App.css';
import List from './page/List'
import Write from './page/Write'
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
        <List />
        <Write wrbo={wrbo} />
      </Mycontxt>
    
  );
}

export default App;

