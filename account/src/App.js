import './App.css';

import {HashRouter,Routes,Route,Link} from 'react-router-dom'
import List from './component/List';
import Insert from './component/Insert';
import Modify from './component/Modify';
import Context from './Context';
function App() {
  
  return (
    <Context>
    <HashRouter>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/insert'>글쓰기</Link>
          <Link to='/modify'>글수정</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/insert" element={<Insert/>}/>
          <Route path="/modify" element={<Modify/>}/>
        </Routes>
      </main>
    </HashRouter>
    </Context>
  );
}

export default App;
