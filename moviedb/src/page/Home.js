import { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Home() {
    
    const [data,setData] = useState([]);
    const [dataT,setDataT] = useState([]);
    const [tdataP,tsetDataP] = useState([]);
    const [tdataT,tsetDataT] = useState([]);
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
    useEffect(()=>{
        Movie.get('/movie/top_rated')
        .then(res=>{
        const MovieTopT = res.data
        setDataT(MovieTopT.results)
    })
    },[])
    useEffect(()=>{
        Movie.get('/tv/popular')
        .then(res=>{
        const tvp = res.data
        tsetDataP(tvp.results)
    })
    },[])
    useEffect(()=>{
        Movie.get('/tv/top_rated')
        .then(res=>{
        const tvt = res.data
        tsetDataT(tvt.results)
        console.log(tvt);
    })
},[])

    return (
        <>
        <article className='back'>  
            <Swiper className='mySwiper' slidesPerView={1} loop>
                {
                    data.map((e)=>(
                        <figure>
                            <SwiperSlide>
                                <article className='txt'>
                            <h3>{e.title}</h3>
                            <p>{e.overview}</p>
                            </article>
                           
                                <figure className='backgr'>
                                <img className='backg' src={` https://image.tmdb.org/t/p/original/${e.backdrop_path}`}/>
                                </figure>
                                <a href="/">
                                <img className='pos' src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}/>
                                </a>
                                
                            </SwiperSlide>
                        </figure>
                    ))
                }
            
            </Swiper>
            </article>
        <article className='Hom'>
            <h2>인기 영화      <a href ="./List.js">더 보기</a></h2>
                <Swiper className='mySwiper' slidesPerView={7} spaceBetween={5} loop>
                {
                    data.map((e)=>(
                        
                        <li key={e.id}> 
                        <SwiperSlide>
                        <a href="/">
                        <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                        <h3>{e.title}</h3>
                        </a>
                        </SwiperSlide>
                        </li>
                    ))
                }
                </Swiper>
        </article>
        <article className='Hom'>
            <h2>shvdms 영화</h2>
                <Swiper className='mySwiper'slidesPerView={7} spaceBetween={5} loop>
                {
                    dataT.map((e)=>(
                        <li key={e.id}> 
                        <SwiperSlide>
                        <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                        <h3>{e.title}</h3>
                        </SwiperSlide>
                        </li>
                    ))
                }
                </Swiper>
        </article>
        <article className='Hom'>
            <h2>인기 TV시리즈</h2>
                <Swiper className='mySwiper'slidesPerView={7} spaceBetween={5} loop>
                {
                    tdataP.map((e)=>(
                        <li key={e.id}> 
                        <SwiperSlide>
                        <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                        <h3>{e.name}</h3>
                        </SwiperSlide>
                        </li>
                    ))
                }
                </Swiper>
        </article>
        <article className='Hom'>
            <h2>높은 TV시리즈</h2>
                <Swiper className='mySwiper'slidesPerView={7} spaceBetween={5} loop>
                {
                    tdataT.map((e)=>(
                        <li key={e.id}> 
                        <SwiperSlide>
                        <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                        <h3>{e.name}</h3>
                        </SwiperSlide>
                        </li>
                    ))
                }
                </Swiper>
                
        </article>
        </>
    )
}

export default Home