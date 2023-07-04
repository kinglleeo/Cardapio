import { React, useState, useEffect } from 'react'
import './Styles/StyleTelaInicial.css'
import { useNavigate } from 'react-router-dom'
import { iniciarRota } from './conecções/api';
import { api } from './conecções/api';
import axios from 'axios';

export default function TelaInicialCardapio(){
    const navigate = useNavigate()
    const [resposta, setResposta] = useState('');
    const [infoClientes, setInfoClientes] = useState([])
    const [cnpj, setCnpj] = useState('')
    const [tipo, setTipo] = useState('')
    const [numerocomanda, setNumeroComanda] = useState('');
    
    //http://suporte.bedinfoservices.com.br:3000/?cnpj=76787191000145&tipo=mesa&numerocomanda=2&delivery=sim
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tipo = urlParams.get('tipo');
        const numerocomanda = urlParams.get('numerocomanda');
        const cnpj = urlParams.get('cnpj');
        const delivery = urlParams.get('delivery')
            setCnpj(cnpj)
            setTipo(tipo)
            setNumeroComanda(numerocomanda)
        const url = `http://suporte.bedinfoservices.com.br:99/appGarline/retornaApiCliente.php?cnpj=${cnpj}`;
            axios
                .post(url)
                .then((response)=>{
                    setResposta(response);
                })
        localStorage.setItem('tipo', tipo);
        localStorage.setItem('numerocomanda', numerocomanda);
        localStorage.setItem('cnpj', cnpj);
        localStorage.setItem('delivery', delivery);
        const timeout = setTimeout(() => {
            if(tipo !== null){
              navigate('/Main')
            } else if (tipo === null){{
              navigate('/LoginGarcom')
            }} 
          }, 3000);
          return () => {
            clearTimeout(timeout);
        };
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
    
    

    return(
        <div className='main-TelaInicial'>
            <div className='box-telainicial'>
                <div className='logo-box'>
                    <div className='logo-telainicial'>
                        {infoClientes !== null ? (
                            <img src={'data:image/png;base64,' + infoClientes.map((item) => item.FOTO)} alt='Restaurante' className='img-restaurante'/>

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
