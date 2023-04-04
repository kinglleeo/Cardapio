import React from 'react'
import Main from './components/Paginas/Main'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export default function App(){
    return(
        <Main/>
    )
}