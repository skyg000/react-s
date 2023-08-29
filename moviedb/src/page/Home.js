import { useEffect, useState } from 'react'
import List from './List'
import axios from 'axios'



function Home() {
    let [data,setData] = useState([]);
    const Movie = axios.create({
        baseURL:'https://api.themoviedb.org/3',
        params:{api_key:'f89a6c1f22aca3858a4ae7aef10de967'}
    })
    useEffect(()=>{
        Movie.get('movie/popular')
        .then(res=>{
        const MovieTop = res.data
        setData(MovieTop.results)
    })
    },[])
    
    return (
        <>
        <article className='Hom'>
            <h2>인기 영화</h2>
                <ul>
                {
                    data.map((e)=>(
                        <li key={e.id}> 
                        <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                        <h3>{e.title}</h3>
                        </li>
                    ))
                }
                </ul>
        </article>
        </>
    )
}

export default Home