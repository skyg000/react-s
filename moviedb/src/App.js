import './App.scss';
import List from './page/List';
import Detail from './page/Detail';
import Home from './page/Home';
import {Link,BrowserRouter, Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  
  
  

  return (
    <BrowserRouter>
      <article className='m'>
        <header>
          <nav className='menu'>
          <h2> FLIX</h2>
            <Link to="/"> Home </Link>
            <Link to="/List"> Movie </Link>
            <Link to="/List"> TV </Link>
          </nav>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:type' element={<List />}/>
            <Route path='/:type/:id' element={<Detail/>}/>
            <Route path='/:type/:id/:keyword' element={<search/>}/>
          </Routes>
        </main>
        </header>
      </article>
    </BrowserRouter>
  );
}
/* useparams  */
export default App;
