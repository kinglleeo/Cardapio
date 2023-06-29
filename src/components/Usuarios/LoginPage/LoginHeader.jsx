import { React, useState, useEffect } from 'react'
import { api } from '../../../conecções/api';
import './loginheader.css'

export default function cartHeader(){
    const [cnpj, setCnpj] = useState('');
    const [infoClientes, setInfoClientes] = useState([])
    
    useEffect(()=>{
        const cnpj = localStorage.getItem('cnpj');
            setCnpj(cnpj)
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
            });
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
                <div className='login-logo-resta'>
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