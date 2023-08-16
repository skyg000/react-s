import { useContext } from 'react'
import {DataContext} from '../Mycontxt'

function List({pop}) {
    const {data} = useContext(DataContext);
    return (
        <article className='on'>
            <h2>  참여인원: {data.length} 명 </h2>
            <ul>
                {
                    data.map((item)=>(
                        <li key={item.name}>
                            {item.name}
                            <button > 삭제 </button>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default List