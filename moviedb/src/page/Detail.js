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
            <p>{ type == 'movie' ? data.data.title : data.data.name }</p>
        </>
    )
}

export default Detail