# Proyecto Next.js

Este proyecto fue creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Índice

- [Descripción](#descripción)
- [Bitácora de Clases](#bitácora-de-clases)
- [Instalación y Puesta en Marcha](#instalación-y-puesta-en-marcha)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Recursos y Documentación](#recursos-y-documentación)
- [Despliegue](#despliegue)

---

## Descripción

Aplicación desarrollada con Next.js para prácticas y aprendizaje de React y su ecosistema. El proyecto sigue una estructura modular y aprovecha las funcionalidades modernas de Next.js, como el enrutamiento basado en archivos y la optimización automática de fuentes.

---

## Bitácora de Clases

### Clase 1: Introducción y Primeros Pasos

- **Archivo trabajado:** `src/app/page.jsx`
- **Actividades realizadas:**
  - Exploración de la estructura inicial del proyecto Next.js.
  - Edición y personalización de la página principal.
  - Pruebas de recarga automática y visualización de cambios en tiempo real.

### Clase 2: Estados y Funcionalidades Interactivas

- **Archivos trabajados:** `src/app/page.jsx`, `src/components/`
- **Actividades realizadas:**
  - Implementación y manejo de estados (`useState`) en componentes.
  - Creación de botones para interactuar con el usuario.
  - Programación de eventos para mostrar alertas al hacer clic en los botones.
  - Práctica de la comunicación entre componentes y la actualización dinámica de la interfaz.

### Clase 3: Manejo de Estado y Efectos en Páginas

- **Archivo trabajado:** `src/pages/`
- **Actividades realizadas:**
  - Uso de `useState` y `useEffect` para gestionar y modificar variables de estado.
  - Captura de valores ingresados por el usuario y actualización dinámica del estado.
  - Ejecución de efectos secundarios en respuesta a cambios en el estado.
  - Práctica de la reactividad y el ciclo de vida de los componentes en React.

### Clase 4: Rutas, Navbar y Consumo de API

- **Archivos trabajados:** `src/app/lista/page.jsx`, `src/app/productos/page.jsx`, `src/components/Navbar.jsx`
- **Actividades realizadas:**
  - Creación de nuevas carpetas y archivos para rutas: `app/lista/page.jsx` y `app/productos/page.jsx`.
  - Implementación de un componente de navegación ([`Navbar`](src/components/Navbar.jsx)) para facilitar el acceso entre páginas.
  - En `productos/page.jsx`, consumo de una API externa de productos de ropa utilizando `fetch` y renderizado dinámico de los productos en una cuadrícula.
  - Práctica de renderizado condicional y uso de `useEffect` para manejar la lógica de obtención de datos.

---

## Instalación y Puesta en Marcha

1. Instala las dependencias del proyecto:

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

2. Inicia el servidor de desarrollo:

   ```bash
   # Ingreso a la ruta con cd a la carpeta "myreact"
   # Despues inicio el servidor:
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev

   ```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## Estructura del Proyecto

```
myreact/
├── src/
│   ├── app/
│   │   └── page.jsx
│   ├── components/
│   └── pages/
├── public/
├── package.json
└── README.md
```

- **src/app/page.jsx:** Página principal de la aplicación.
- **src/components/:** Carpeta destinada a componentes reutilizables.
- **src/pages/:** Carpeta para futuras páginas adicionales.

---

## Recursos y Documentación

- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Tutorial interactivo de Next.js](https://nextjs.org/learn)
- [Repositorio en GitHub de Next.js](https://github.com/vercel/next.js)

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar fuentes automáticamente, como [Geist](https://vercel.com/font).

---

## Despliegue

La forma más sencilla de desplegar tu aplicación Next.js es usando [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
