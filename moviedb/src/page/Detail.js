import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {totalDb} from './Data'
function Detail() {
    const [data,setData] = useState();
    let {type,id} = useParams();
    const res = totalDb.db_Movie(`${type}/${id}`);
    useEffect(()=>{ res.then((res) => { setData(res) }); },[])
    console.log(data);
    if(!data) return <></>
    return (
        <>
            <article className="detail">
                <article className="backgi">
                    <figure>
                        <img className="dback1"src={` https://image.tmdb.org/t/p/original/${data.data.backdrop_path}`}/>
                    </figure>
                </article>
                <article className="poster">
                    <figure>
                        <img className="dpos" src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}/>
                    </figure>
                </article>
                <article className="d-con">
                    <h2>{ type == 'movie' ? data.data.title : data.data.name }</h2>
                <article className="d-btn">
                    <span>{data.data.genres[0].name}</span>
                    <span>{data.data.genres[1].name}</span>
                    <span>{data.data.genres[2].name}</span>
                </article>
                    <p>{data.data.overview}</p>
                <article className="castitle">
                    <h2>Casts</h2>
                </article>
                </article>
            </article>
        </>
    )
}

export default Detail