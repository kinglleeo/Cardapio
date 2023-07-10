import { React, useState, useEffect } from 'react'
import { api } from '../../conecções/api';
import './StyleHeaders.css'
import TopoHeaderBar from './TopoHeaderBar'

export default function cartHeader(){
    const [infoClientes, setInfoClientes] = useState([]);
        
    useEffect(()=>{
        const dados = localStorage.getItem('empresa')
            setInfoClientes(JSON.parse(dados))
    }, [])
    
    return(
        <div className='cartHeader'>
            <TopoHeaderBar/>
            <div className='cartHeaderBody'>
                <div className='logo-resta'>
                {Array.isArray(infoClientes) ?  (
                        infoClientes.map((item)=> 
                            <div>
                                <img src={'data:image/png;base64,' + item.FOTO} key={item.id} alt='Restaurante' className='img-restaurante-logo' />
                            </div>
                    )) : null} 
                </div>
            </div>
        </div>
    )
}