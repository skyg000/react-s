import { DataContext } from '../Mycontext';
import {useContext} from 'react'

function List() {
    const {data,setData} = useContext(DataContext);
    console.log(data);
    return (
        <article>
            <h2>List</h2>
            <ul>
                {
                    data.map((item)=>(
                        <li key={item.id}>
                            {item.name}<br/>({item.email})<br/>
                            {item.txt}<br/>({Date(item.id)})
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default List