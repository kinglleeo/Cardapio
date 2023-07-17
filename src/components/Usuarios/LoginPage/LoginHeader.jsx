import { React, useState, useEffect } from 'react'
import { api } from '../../../conecções/api';
import './loginheader.css'

export default function cartHeader(){
    const [infoClientes, setInfoClientes] = useState([]);
    
    useEffect(()=>{
        const dados = localStorage.getItem('empresa')
            setInfoClientes(JSON.parse(dados))
    }, [])
    return(
        <div className='loginHeader'>
            <div className='loginHeaderTopo'>
                <div className=''></div>
                <div className='login-logo-garline-header'>
                    <div className='login-logo-garline'></div>
                </div>
            </div>
            <div className='loginHeaderBody'>
            </div>
            <div className='login-logo-resta'>
                {Array.isArray(infoClientes) ?  (
                    infoClientes.map((item)=> 
                    <div key={item.NOME_FANTASIA}>
                        <img src={'data:image/png;base64,' + item.FOTO} key={item.id} alt='Restaurante' className='img-restaurante-logo' />
                    </div>
                )) : null}                    
            </div>
        </div>
    )
}