
import axios from 'axios';
function App() {

  axios.get('http://localhost:3030/abc?id=100')
  .then(res=>{
    console.log(res);
  })
  axios.post('http://localhost:3030/insert',{id:10000,name:'신규'})
  

  return (
    <>
    
    </>
  );
}

export default App;
