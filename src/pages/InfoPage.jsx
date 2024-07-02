import { useEffect, useState } from "react";


export const InfoPage = () => {

      const [posts, setPosts]=useState([])

    const getApi= async ()=>{
        const url= 'https://jsonplaceholder.typicode.com/posts';
        const resp= await fetch(url);
        const data= await resp.json();
        // console.log(data);
        setPosts(data);

    }

    const comeHome=()=>{

     window.location.href='/';
    //  console.log(window.location)
    //    window.history.back(-1)

    }
    console.log(window.location.search)  //
    const params = new URLSearchParams(window.location.search);
    console.log(params)
    const localParams= params.get('id')  // buscar id en este caso de la url
    console.log(localParams)
    params.delete('id')  // limpiar el proceso
    console.log(params)
    //   const restaurar= new URL( window.location.href='/');
    //   console.log(restaurar)  
useEffect(() => {
    
    getApi()
 
}, [])

  return (
 <>
    {
        posts.map(item=>(
            <li key={item.id}>{item.title}</li>
        ))
    }
     <button onClick={comeHome}
             className='mause'
             >
            Regresar
     </button>
    
</>
  )
};
