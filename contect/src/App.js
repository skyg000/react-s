import './App.css';
import List from './page/List'
import Write from './page/Write'
import Mycontext  from './Mycontext';
/* export default = { }가 붙지않음 */


function App() {
  return (
    <Mycontext>
      <List/>
      <Write/>
    </Mycontext>
  );
}

export default App;
