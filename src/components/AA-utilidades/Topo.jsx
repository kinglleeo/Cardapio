import { React } from 'react'
import './style-aa.css'

export default function TopoPagina(){

    const handleTopo=()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
    }

    return(
        <div className='btn-topo-pagina'>
            <button className='btn-topo' onClick={handleTopo}></button>
        </div>
    )
}