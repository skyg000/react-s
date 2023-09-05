import {useEffect,useState} from 'react'
import axios from 'axios';
/* 여러 곳에서 사용하지 않으면 App.js에서 한번에 사용 가능 */
function List({data,setData}) {
  const remove = (id)=>{
    axios.delete(`${process.env.REACT_APP_SERVER}/abc/${id}`)
    .then(res=>{
      setData(res.data)
    })
  }
  return(
    <>
      {
        data.map(obj=>(
          <li key={obj.id}>
            {obj.msg}
            <button onClick={()=>{remove(obj.id)}}> 삭제 </button>
          </li>
        ))
      }
    </>  
  )
}

function Write({setData}) {
  const insert = (e)=>{
    e.preventDefault();
  let msg = e.target.msg.value;
    axios.post(`${process.env.REACT_APP_SERVER}/insert`,{msg})
    .then(res=>{
      setData(res.data);
    })
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
  const [data,setData] = useState([]);
  const getData = ()=>{
    axios.get(`${process.env.REACT_APP_SERVER}/abc`)
    .then(res=>{
    setData(res.data);
  });
  }
  useEffect(()=>{
    getData();
  },[]);
  
  /* axios.post('http://localhost:3030/insert',{id:10000,name:'신규'}) */
  

  return (
    <div>
      <h2> 한줄 댓글</h2>
        <Write setData={setData}/>
      <ul>
        <List data={data} setData={setData}/>
      </ul>
    </div>
  );
}

export default App;
