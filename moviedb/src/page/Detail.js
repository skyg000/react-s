import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const param = useParams();
    const [data2,setData2] = useState([]);
    let {type,id} = useParams();
    console.log(type,id);
    return (
        <div>
            {
                    data2.map((e)=>(
                        <a href='/'>
                            <li key={param.type}>
                            {param.id}
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <h3>{e.title}{e.name}</h3>
                            </li>
                        </a>
                    ))
                }
            
        </div>
    )
}

export default Detail