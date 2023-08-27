import axios from 'axios';
import {createContext, useEffect, useReducer} from 'react'
export const MyContext =createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case 'post' : return [...state,action.d];
        case 'put' : return state.map(obj=>{
                            if(obj.id == action.d.id) {
                                obj.price = action.d.price;
                                obj.msg = action.d.msg;
                                obj.date = action.d.date;
                            }
                            return obj;
                        }); 
         /* state.map 반복문을 돌려서 obj.id 이  action.d.id 값과 같으면 아래식 처럼 내용을 바꾼다? */ 
        case 'del' : return state.filter(obj=>obj.id != action.d);
        default: return action.d;
    }
}
function Context({children}) {
    const [data,dispatch] = useReducer(reducer,[]) 
    const instance = axios.create({  /* axios 반복해서 사용해야 할 경우  */
        baseURL:"http://localhost:3030/history"
    });
    /* const fetchFn = ()=>{
        instance.get('/')
        .then(res=>{
            dispatch({type:'get',d:res.data})
        })
    } */
    const fetchFn = async (type,data)=>{ /* async 사용하려면 함수(function)앞에 넣어야함 */
    let res;  /* = await instance.get('/') await= 데이터 작업이 끝날때까지 기다렸다가 완료 되면 순차 실행 */
        switch(type){ 
            case 'post' : 
                res = await instance.post('/',data);
                break; /* break를 작업 뒤에 입력해줘야 함 */
            case 'put' : 
                res = await instance.put(`/${data.id}`,data); 
                break;
            case 'del' : 
                res = await instance.delete(`/${data}`); 
                res = {data}; 
                break;
            default: 
                res = await instance.get('/');
        }
        dispatch({type,d:res.data})
    }

    useEffect(()=>{ /* useEffect안에서 1번만 실행 */
        fetchFn('get')
    },[])
    console.log(data);
    return (
        <MyContext.Provider value={{data,fetchFn}}>
            {children}
        </MyContext.Provider>
    )
    }

export default Context