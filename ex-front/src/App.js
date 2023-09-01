
import axios from 'axios';
function App() {

  axios.get('http://localhost:3030/abc?id=100')
  .then(res=>{
    console.log(res);
  })
  return (
    <>
     
    </>
  );
}

export default App;
