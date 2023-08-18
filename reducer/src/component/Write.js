import React, { useContext } from 'react'
import { MyContect } from '../Context';

function Write() {
    const {dispatch} = useContext(MyContect);

    const insert = (e)=>{
        e.preventDefault();
        let today = new Date();
        
        let form = new FormData(e.target)
            form.append('id',Date.now());
            form.append('date',`${today.getFullYear()} - ${today.getMonth()+1} - ${today.getDate()}`); /* 작성 날짜 출력 */

        let d = Object.fromEntries(form) /* 객체형태로 출력 */  /* let test2 = new FormData(e.target) console.log(test2.get()); */
        console.log(d);

        dispatch({type:'insert',data:d});
    }
    return (
    <article>
        <h2>Contect</h2>
        <form onSubmit={insert} id ='contect'>
            <input type='text' name='name' placeholder='이름'/>
            <input type='email' name='email'placeholder='이메일'/>
            <textarea name='content'></textarea>
            <input type='submit' value='저장하기'/>
        </form>
    </article>
    )
}

export default Write