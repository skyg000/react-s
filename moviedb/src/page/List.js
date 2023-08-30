import React, { useEffect, useState }  from 'react'
import axios from 'axios'
function List() {
    const [data,setData] = useState([])
    const [dataT,setDataT] = useState([])
    useEffect(()=>{
        axios('https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
        .then(res=>{
            const Mdata = res.data
            setData(Mdata.results)
        })
    },[])
    useEffect(()=>{
        axios('https://api.themoviedb.org/3/tv/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
        .then(res=>{
            const Tdata = res.data
            setDataT(Tdata.results)
        })
    },[])
    return (
        <>
        <article className='list'>
            <h2> MOVIE </h2>
            <ul>
                {
                    data.map((e)=>(
                        <a href="/">
                            <li key={e.id}> 
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <h3>{e.title}</h3>
                            </li>
                        </a>
                    ))
                }
                </ul>
                <p> 더 보기 </p>
        </article>
        <article className='list'>
            <h2> TV </h2>
            <ul>
                {
                    dataT.map((e)=>(
                        <a href="/">
                            <li key={e.id}> 
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <h3>{e.name}</h3>
                            </li>
                        </a>
                    ))
                }
                </ul>
                <p> 더 보기 </p>
        </article>
        
        
        </>
        
        
    )
}

export default List