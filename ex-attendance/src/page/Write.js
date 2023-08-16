import{useContext}  from 'react'
import { DataContext } from '../Mycontxt';
function Write({item,wrbo}) {
    const {data,setData} = useContext(DataContext);  
   
    let insert = (e)=>{
        e.preventDefault();
        let a = e.target;
        let d = {
            name:a.name.value
        }
        setData([...data, d])
    }
    return (
        <article className='list' ref={wrbo} >
            <h2> 참여자 목록 </h2>
            
            <form onSubmit={insert}>
                <input type='text' name="name" /><br/>
                <input type='submit' value="참여하기"/>
            </form>
        </article>
    )
}

export default Write