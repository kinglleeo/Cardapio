import { React, useState, useEffect } from 'react'
import { api } from '../../conecções/api';
import './cartheader.css'

export default function cartHeader(){
    const [cnpj, setCnpj] = useState('');
    const [infoClientes, setInfoClientes] = useState([])
    
    useEffect(()=>{
        const cnpj = sessionStorage.getItem('cnpj');
            setCnpj(cnpj)
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
            });
    }, [])

    return(
        <div className='cartHeader'>
            <div className='cartHeaderTopo'>
                <div className=''></div>
                <div className='logo-garline-header'>
                    <div className='logo-garline'></div>
                </div>
            </div>
            <div className='cartHeaderBody'>
                <div className='logo-resta'>
                    {infoClientes.map(item => (
                        <img src={'data:image/png;base64,' + item.FOTO} key={item.id} alt='Restaurante' className='img-restaurante-logo' />
                    ))}
                </div>
            </div>
        </div>
    )
}