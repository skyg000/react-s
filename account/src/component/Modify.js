import React, { useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';

function Modify() {
    const elForm= useRef();
    const location = useLocation(); /* navigator를 통해 보내준 값을 받아 사용할때 사용 */
    const {price,msg,date,id} = location.state.obj

    const navigate = useNavigate();
    const {fetchFn} = useContext(MyContext);
    const insertFn = (t,e)=>{

        e.preventDefault();
        let formdata = new FormData(elForm.current);
        let today = new Date();
        let date = `${today.getFullYear()} - ${today.getMonth()+1 } - ${today.getDate()}`
            formdata.append('date',date);
            formdata.append('id',id);
        
    let ObjForm = Object.fromEntries(formdata); /* [['price','1000'],['msg','sdadsadsa']] */
        fetchFn('put',ObjForm) /* 데이터가 실행 되는 곳에서  fetchFn실행 */
        navigate('/');
    }
    
    return (
        <article>
            <h2>modify</h2>
            <form ref={elForm}>
                <input type="text" name="price" defaultValue={price}/>
                <textarea name='msg'defaultValue={msg}></textarea> {/* defaultValue=한번만 보여주기에 수정이 가능 */}
                <button onClick={(e)=>{insertFn('p',e)}}> 예금하기 </button>
                <button onClick={(e)=>{insertFn('m',e)}}> 출금하기 </button>
            </form>
    </article>
    )
}

export default Modify