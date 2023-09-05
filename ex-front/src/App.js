
import axios from 'axios';
/* 여러 곳에서 사용하지 않으면 App.js에서 한번에 사용 가능 */
function List() {
  return(
        <li>
          쓴글
          <button> 삭제 </button>
        </li>
  )
}

function Write() {
  const insert = (e)=>{
    e.preventDefault();
    let msg = e.target.msg.value;
    axios.post(`${process.env.REACT_APP_SERVER}/insert`,{msg})
    console.log(e.target.msg.value);
  }
  return(
      <div>
        <form onSubmit={insert}>
          <input type="text" name="msg"/>
          <input type="submit" value="저장"/>
        </form>
      </div>
  )
}

function App() {

  axios.get(`${process.env.REACT_APP_SERVER}abc`)
  .then(res=>{
    console.log(res);
  })
  /* axios.post('http://localhost:3030/insert',{id:10000,name:'신규'}) */
  

  return (
    <div>
      <h2> 한줄 댓글</h2>
        <Write/>
      <ul>
        <List/>
      </ul>
    </div>
  );
}

export default App;
