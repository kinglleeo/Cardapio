import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { iniciarRota } from './conecções/api';
import './telainicialcardapio.css'
import { api } from './conecções/api';
import { BoxLoading  } from 'react-loadingg';

export default function TelaInicialCardapio(){
    const navigate = useNavigate()
    const [resposta, setResposta] = useState('');
    const [mesa, setMesa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [infoClientes, setInfoClientes] = useState([])

    //formato da ult: http://192.168.0.93:3000?mesa=2&cnpj=000000000000
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const mesaValue = urlParams.get('mesa');
        const cnpjValue = urlParams.get('cnpj');
            setMesa(mesaValue || '');
            setCnpj(cnpjValue || '');
                sessionStorage.setItem('mesaValue', mesaValue);
                sessionStorage.setItem('sesaoAtiva', "sim");
                sessionStorage.setItem('cnpj', cnpjValue);
            api
                .get(`/dadosEmpresa/${cnpjValue}`)
                .then((getdata)=>{
                    setInfoClientes(getdata.data);
                });
    }, []);
         
    useEffect(()=>{
          const url = `http://suporte.bedinfoservices.com.br:99/appGarline/retornaApiCliente.php?cnpj=${cnpj}`;
          axios
            .post(url)
            .then((response)=>{
                setResposta(response);
            })
    }, [cnpj])  

    useEffect(() => {
        if (resposta) {
          const parts = resposta.data.split('|');
          if (parts.length === 2) {
            const rotalink = parts[0].trim();
            const rotaBase = parts[1].trim();
            const RotaFinal = `${rotalink}:${rotaBase}`;
                iniciarRota(RotaFinal)
          }
        }
    }, [resposta]);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigate('/Main'); 
        }, 3000);
    
        return () => {
          clearTimeout(timeout);
        };
      }, [navigate]);

    return(
        <div className='main-TelaInicial'>
            <div className='box-telainicial'>
                <div className='logo-box'>
                    <div className='logo-telainicial'>
                        {infoClientes !== null ? (
                            infoClientes.map(item => (
                                <img src={'data:image/png;base64,' + item.FOTO} key={item.id} alt='Restaurante' className='img-restaurante'/>
                            ))
                        ): ( <div> </div>)}
                    </div>
                </div>
                <div className='text-box'>
                    <div>FAÇA SEU PEDIDO!</div>  
                </div>
                <div className='box-loading'>
                    
                </div>
                <div className='poweredby'>
                    <div> Powered By B&d Info Services. </div>
                </div>
            </div>
        </div>
    )
}
