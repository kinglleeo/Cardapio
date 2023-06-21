import { React, useEffect, useState } from 'react'
import './Header.css'
import axios from 'axios'
import { api } from '../../conecções/api'

export default function Header (){
    const [infoClientes, setInfoClientes] = useState([])
    const [cnpj, setCnpj] = useState('')
    console.log(infoClientes)
    console.log(cnpj)

    useEffect(()=>{
        const cnpj = sessionStorage.getItem('cnpj');
            setCnpj(cnpj)
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
            });
    }, [setCnpj])

    
    return(
        <div className='Main-header'>
            <div className='header-header'>
                <div className='logo-garline'></div>
            </div>
            <div className='body-header'>
                <div className='banner-garline'>
                    <div className='banner-infos'>
                        <div className='icone-tempo'> </div>
                        <div className='tempo-banner'>
                        <div>{infoClientes.map(item => item.TEMPO_ESPERA)} Minutos </div>
                        </div>
                    </div>
                    <div className='banner-infos'>
                        <div className='icone-horario'></div>
                        <div className='tempo-banner'>
                            <div>
                                <div>Abertura {infoClientes.map(item => item.HORA_ABERTURA)}</div>
                                <div>Fechamento {infoClientes.map(item => item.HORA_FECHAMENTO)}</div>
                            </div>
                        </div>
                    </div>
                    <div className='banner-infos'>
                        <div className='icone-Whatsapp'></div>
                        <div className='tempo-banner'>
                            <div>{infoClientes.map(item => item.WHATS)}</div>
                        </div>
                    </div>
                    <div className='box-NomeEmpresa'>
                        <div>{infoClientes.map(item => item.NOME_FANTASIA)}</div>
                    </div>
                </div>
                <div className='footer-header'>
                    <div className='endereço-header'> {infoClientes.map(item => item.LOGRADOURO + ", " + item.BAIRRO + ", N°" + item.NUMERO + ", " + item.CIDADE + " - " + item.UF)} </div>
                </div>
                <div className='logo-restaurante'></div>
            </div>    
        </div>
    )
}