import { useContext } from 'react'
import {DataContext} from '../Mycontxt'

function List() {
    const {data,setData} = useContext(DataContext);
    const deleteData = (code)=>{
    setData(data.filter(obj=>obj.code !== code))
    }
    return (
        <article className='on'>
            <h2>  참여인원: {data.length} 명 </h2>
            <ul>
                {
                    data.map((item,k)=>(
                            <li key={item.code}>
                                <div>
                                {k+1}. 
                                {item.name}
                                </div>
                                <button onClick={()=>{deleteData(item.code)}}> 삭제 </button>
                            </li>
                            
                    ))
                }
            </ul>
        </article>
    )
}

export default List