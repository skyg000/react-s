
import axios from 'axios';

function App() {

  axios.get(`${process.env.REACT_APP_SERVER}abc`)
  .then(res=>{
    console.log(res);
  })
  /* axios.post('http://localhost:3030/insert',{id:10000,name:'신규'}) */
  

  return (
    <>
    
    </>
  );
}

export default App;
