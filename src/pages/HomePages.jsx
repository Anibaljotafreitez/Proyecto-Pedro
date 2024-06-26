import React from 'react'
import { useNavigate, } from 'react-router'


export const HomePages = () => {

   const navigate= useNavigate()
   console.log(navigate)
       

    const onScrollPage=()=>{
    //    console.log('hice click')
     navigate('/scroll')
    }

    const onMauselPage=()=>{
        // console.log('hice click')
      navigate('/mause')
     }
   
    
  return (
 
    <div className='container'>
        <h1> TAREA MAUSE-SCROLL</h1>
        <div className='botones'>

          <button className='scroll'
                  onClick={onScrollPage}  
          > Scroll </button>
          <button className='mause'
                  onClick={onMauselPage}
          > Mause </button>

        </div>
    </div>
  )
}

