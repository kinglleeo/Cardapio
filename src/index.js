import React from 'react'
import App from './App'
import Main from './components/Paginas/Main'
import Pasteis from './components/Paginas/Pasteis/Pasteis'
import Pizzas from './components/Paginas/Pizzas/Pizzas'
import Lanches from './components/Paginas/Lanches/Lanches'
import Porcoes from './components/Paginas/Porcoes/Porcoes'
import Bebidas from './components/Paginas/Bebidas/Bebidas'
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"

const router = createBrowserRouter([
    {path: "/", element: (<App/>)},
    {path: "/Main", element: (<Main/>)},
    {path: "/Pasteis", element: (<Pasteis/>)},
    {path: "/Pizzas", element: (<Pizzas/>)},
    {path: "/Lanches", element: (<Lanches/>)},
    {path: "/Porcoes", element: (<Porcoes/>)},
    {path: "/Bebidas", element: (<Bebidas/>)}
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );