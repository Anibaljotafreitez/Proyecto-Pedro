import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export const ScrollPage = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const navigate = useNavigate()
 
    const handleScroll = (event) => {
        console.log(event)
        const { scrollTop, clientHeight } = event.target; 
        const scrollRatio = scrollTop / clientHeight

        if (scrollRatio > 0.1) {
            setBackgroundColor("purple");
        } else {
            setBackgroundColor("white");
        }
    };
            const onBack=()=>{
                navigate('/')
            }
    return (
        <div
            // className="scrollable-section"
            style={{
                height: "100vh",
                width: "100%",
                overflowY: "scroll",
                // border: "1px solid #ccc",
                backgroundColor: backgroundColor,
                transition: "background-color 0.5s ease",
                margin: 0
            }}
            onScroll={handleScroll}
        >
            <p style={{ paddingTop: "200px", textAlign: "center" }}>
               Seccion de Desplazamiento
            </p>
            <p style={{ paddingTop: "200px", textAlign: "center" }}>
                Sigue desplazando...
            </p>
            <p style={{ paddingTop: "200px", textAlign: "center" }}>
                Cambio de fondo
            </p>
            <div className='botones'>

            <button className='regresar'
                    onClick={onBack}
            >Regresar</button>
            </div>
        </div>
    );
}