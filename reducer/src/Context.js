import {createContext, useReducer} from 'react'
const MyContect = createContext();
const reducer = (state, action)=>{ /* action=수정 삭제를 함 */
    /*  switch(action.type){
        case 'insert' : (일을시키고) return state 수정;
        case '0' : (일을시키고) return state 수정;
        case '1' : (일을시키고) return state 수정;
    } */
    switch(action.type){
        case 'insert' : return [...state,action.data];
        case 'delete' : return state.filter(obj=>obj.id !== action.id) /* filter사용할때는 비교식을 사용함 */
        default : return state; /* case에 해당하지 않을때 기존값(state)값을 리턴시킴 */
    } 
}

function Context({children}) {
    const [data,dispatch] = useReducer(reducer,[]); /* useReducer(함수, [ ])=안에값이 변경 되면 랜더링발생  | 데이터도 가질수있고 수정도 가능 | dispatch = action으로 요청함*/

    /* onClick = ()=>{
        dispatch({type:'insert',d:{name:'홍길동'}}) reducer(action)에 값을 수정하라고 요청함 type을 지정하여 값을 요청함 
    } */
    return (
        <MyContect.Provider value={{data,dispatch}}>
            {children}
        </MyContect.Provider>
    )
}

export {MyContect, Context}