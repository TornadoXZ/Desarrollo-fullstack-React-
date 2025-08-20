/*      

    useEffect (() => {
        -- Accion que quiero ejecutar 
        }, [dependencias]) -- array de dependencias


*/

// Generar un alista al ejecutar un efecto secundario me muestra el conetnido en consola

'use client';
import { useState, useEffect } from "react";

export default function Mensaje() {
    const [nombre, setNombre] = useState("");

    //useEffect 
    useEffect(() =>{
        console.log("El nombre es: ", nombre);
    }, [nombre]); //Dependencia se ejecuta cuando nombre cambia 

    return (
        <div style ={{textAlign: 'center'}}>
            <input type="text" 
            placeholder="Escirbe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}

            />


            <p> Hola {nombre || "invitado"} 😊 </p>
        </div>
    )
}