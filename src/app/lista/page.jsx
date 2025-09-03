'use client';
import { useState } from "react";

//Crear una lista basica con map()
export default function Page() {
    const [tareas, setTareas] = useState(["Estudiar React", "Hacer ejercicios", "Leer un libro"]);

    return(
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <h1>lsita de tareas</h1>
            <ul style={{ listStyle: 'center', padding: 0}}>
                {tareas.map((tarea, index) =>(
                    <li key={index}
                        style={{
                            margin: '10px',
                            padding: '10px',
                            border: '1px solid gray',
                            borderRadius: '8px'
                        }}>
                            {tarea}
                        </li>
                ))}
            </ul>
        </div>
    );
}