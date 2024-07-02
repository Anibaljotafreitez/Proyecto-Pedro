import React from 'react'
import { useNavigate, } from 'react-router'


export const HomePages = () => {

   const navigate= useNavigate()
  //  console.log(navigate)
       
    const handleNavigatePage=(url)=>{

      navigate(url)
    }

  
    
  return (
 
    <div className='container'>
        <h1> TAREA MAUSE-SCROLL</h1>
        <div className='botones'>

          <button className='scroll'
                  onClick={()=>handleNavigatePage('/scroll')}  
          > Scroll </button>
          <button className='mause'
                  onClick={()=>handleNavigatePage('/mause')}
          > Mause </button>

          <button  className='mause'
                   onClick={()=>handleNavigatePage('/info')}
          >Informacion</button>

        </div>
    </div>
  )
}

