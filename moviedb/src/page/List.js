import React, { Link,useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import {totalDb} from './Data'

function List() {
    const param = useParams();
    const [data1,setData1] = useState([]);
    async function loadD (){
        const load = await totalDb.db_Movie(`/${param.type}/popular`)
        setData1(load.data.results)
    }
    useEffect(()=>{
        loadD();
    },[param.type]) 
    return (
        <>
        <article className='list'>
            <h2> {param.type} </h2>
            <ul>
                {
                    data1.map((e)=>(
                        <li key={e.id}> 
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <h3>{e.title}{e.name}</h3>
                            </li>
                    ))
                }
            </ul>
            <p> <a href=' '>더 보기</a> </p>
        </article>
        </>
    )
}

export default List