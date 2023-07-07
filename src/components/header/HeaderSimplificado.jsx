import { React, useState, useEffect } from 'react'
import { api } from '../../conecções/api';
import './StyleHeaders.css'
import TopoHeaderBar from './TopoHeaderBar'

export default function cartHeader(){
    const [cnpj, setCnpj] = useState('');
    const [infoClientes, setInfoClientes] = useState([]);
        
    useEffect(()=>{
        const cnpj = localStorage.getItem('cnpj');
            setCnpj(cnpj)
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
            });
    }, []);
    
    return(
        <div className='cartHeader'>
            <TopoHeaderBar/>
            <div className='cartHeaderBody'>
                <div className='logo-resta'>
                {Array.isArray(infoClientes) ?  (
                        infoClientes.map((item)=> 
                            <div key={cnpj}>
                                <img src={'data:image/png;base64,' + item.FOTO} key={item.id} alt='Restaurante' className='img-restaurante-logo' />
                            </div>
                    )) : null} 
                </div>
            </div>
        </div>
    )
}