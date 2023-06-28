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
    const [infoClientes, setInfoClientes] = useState([])
    const [cnpj, setCnpj] = useState('')
    console.log(infoClientes)

    //formato da ult: http://192.168.0.93:3000?mesa=2&cnpj=000000000000
    //novoformato http://suporte.bedinfoservices.com.br:3000/?tipo=mesa&numerocomanda:2&cnpj=76787191000145
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tipo = urlParams.get('mesa');
        const numerocomanda = urlParams.get('numerocomanda');
        const cnpj = urlParams.get('cnpj');
            setCnpj(cnpj)
        const url = `http://suporte.bedinfoservices.com.br:99/appGarline/retornaApiCliente.php?cnpj=${cnpj}`;
            axios
                .post(url)
                .then((response)=>{
                    setResposta(response);
                })
        sessionStorage.setItem('tipo', tipo);
        sessionStorage.setItem('numerocomanda', numerocomanda);
        sessionStorage.setItem('cnpj', cnpj);
    }, []);
    

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
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
            });
    }, [cnpj, resposta]);
    
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
