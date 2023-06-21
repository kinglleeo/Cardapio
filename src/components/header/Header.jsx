import { React, useEffect, useState } from 'react'
import './Header.css'
import axios from 'axios'
import { api } from '../../conecções/api'

export default function Header (){
    const [infoClientes, setInfoClientes] = useState([])
    const [cnpj, setCnpj] = useState('')
    console.log(infoClientes)

    useEffect(()=>{
        const cnpj = sessionStorage.getItem('cnpj');
            setCnpj(cnpj)
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
            });
            
    }, [setCnpj])

    const numerosFormatados = infoClientes.map(item => {
        const numero = item.WHATS;
        const numeroFormatado = numero.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
        return numeroFormatado;
      });

    

    
    return(
        <div className='Main-header'>
            <div className='header-header'>
                <div className='logo-garline'></div>
            </div>
            <div className='body-header'>
                <div className='banner-garline'>
                    <div className='banner-infos'>
                        <div className='caixa-icone'>
                            <div className='icone-tempo'> </div>
                        </div>
                        <div className='tempo-banner'>
                        <div>{infoClientes.map(item => item.TEMPO_ESPERA)} Minutos </div>
                        </div>
                    </div>
                    <div className='banner-infos'>
                        <div className='caixa-icone'>
                            <div className='icone-horario'></div>
                        </div>
                        <div className='tempo-banner'>
                            <div>
                                <div>Abre {infoClientes.map(item => item.HORA_ABERTURA.slice(0, 5))}</div>
                                <div>Fecha {infoClientes.map(item => item.HORA_FECHAMENTO.slice(0, 5))}</div>
                            </div>
                        </div>
                    </div>
                    <div className='banner-infos'>
                        <div className='caixa-icone'>
                            <div className='icone-Whatsapp'></div>
                        </div>
                        <div className='tempo-banner'>
                            <div>{numerosFormatados}</div>
                        </div>
                    </div>
                </div>
                <div className='footer-header'>
                    <div className='endereço-header'> {infoClientes.map(item => item.LOGRADOURO + ", " + item.BAIRRO + ", N°" + item.NUMERO + ", " + item.CIDADE + " - " + item.UF)} </div>
                </div>
                <div className='logo-restaurante'>
                    {infoClientes.map(item => (
                        <img src={'data:image/png;base64,' + item.FOTO} key={item.id} alt='Restaurante' className='img-restaurante' />
                    ))}
                </div>
            </div>    
        </div>
    )
}