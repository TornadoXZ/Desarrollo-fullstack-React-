import Navbar from "@/components/Navbar";
import './globals.css';
import { ReactNode } from "react";

//Todo: crear el archivo con estilo predeterminados para el proyeto

export const metadata ={
  title: 'Clase listas y renderizado',
  description: 'Aprendiendo React con Next.js',
};

//Opción 1: tipar e children
interface RootLayoutProps{
  children: ReactNode;
}

/*
Funcion sin tipar
function suma (a,b){
return a + b
}

-> function tipada
function suma (a:number, b:number): number{
return a + b
}

Componente Padre -> (Props Tipado) -> Componentes Hijo
*/




export default function RootLayout({children}: RootLayoutProps){
  return(
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}