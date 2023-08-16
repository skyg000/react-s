import { createContext, useState } from 'react'
export const DataContext = createContext(null);



function Mycontext({children}) {
    const [data, setData] = useState([]);

    /* [
        {
        name:'홍길동',
        email:'aaa@gmail.com',
        txt: '당신을 채용합니다.'
        }
    ] */

    return (
        <DataContext.Provider value={{data, setData}}> {/* 여러 값을 보낼떄는 배열이나객체로 보냄 */}
            {children}
        </DataContext.Provider>
    )
}

export default Mycontext