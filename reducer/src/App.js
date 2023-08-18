import './App.css';
import Write from './component/Write';
import List from './component/List';
import { Context } from './Context';


function App() {
  return (
    <Context>
      <Write/>
      <List/>
    </Context>
  );
}

export default App;
