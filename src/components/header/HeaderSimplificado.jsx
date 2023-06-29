import { React, useState, useEffect } from 'react'
import { api } from '../../conecções/api';
import './cartheader.css'
import TopoHeaderBar from './TopoHeaderBar'

export default function cartHeader(){
    const [cnpj, setCnpj] = useState('');
    const [infoClientes, setInfoClientes] = useState([]);
    
    useEffect(()=>{
        const cnpj = sessionStorage.getItem('cnpj');
            setCnpj(cnpj)
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
            });
    }, []);

    const Voltar =()=>{
        navigate('/Main')
    }
    
    return(
        <div className='cartHeader'>
            <TopoHeaderBar/>
            <div className='cartHeaderBody'>
                <div className='logo-resta'>
                    <img src={'data:image/png;base64,' + infoClientes.map((item) => item.FOTO)} alt='Restaurante' className='img-restaurante-logo'/>
                </div>
            </div>
        </div>
    )
}