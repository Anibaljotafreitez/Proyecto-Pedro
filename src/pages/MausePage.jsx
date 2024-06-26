import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';

export const MausePage = () => {

    const [coordenadasY, setBackgroundColor] = useState({
        up: "white",
        down: "white",
      });

      const coorRef= useRef({})

      const navigate= useNavigate()
      
      const handleMause = (e) => {
          const coordenadasY = window.innerHeight / 2 - e.clientY;
          // console.log(window.innerHeight / 2 - e.clientY)
          coordenadasY <= 0
          ? setBackgroundColor({ down: "lightgreen", up: "white" })
          : setBackgroundColor({ down: "white", up: "lightgreen" });
        };
        useEffect(() => {
            coorRef.current=coordenadasY
            console.log(coorRef.current)
        }, [coordenadasY])
        
      const onBack=()=>{
        navigate('/')
    }

      return (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "48px",
            fontFamily: "Lato, sans-serif",
            fontWeight: 600,
            textTransform: "upperCase",
          }}
        >
          <div
            onMouseMove={handleMause}
            ref={coorRef}
            style={{
              width: "100%",
              height: "50vh",
              backgroundColor: coordenadasY.up,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
    
            <p>color 1</p>
          </div>
          <div
            onMouseMove={handleMause}
            ref={coorRef}
            style={{
              width: "100%",
              height: "50vh",
              backgroundColor: coordenadasY.down,
              display: "grid",
              placeContent: "center",
            }}
          >
            <p>color 2</p>
          </div>
          <div className='botones'>

                <button className='regresar2'
                        onClick={onBack}
                >Regresar</button>
                
                </div>
        </div>
      );
}
