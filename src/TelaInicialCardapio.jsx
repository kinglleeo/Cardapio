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
    
    //http://suporte.bedinfoservices.com.br:3000/?cnpj=76787191000145&tipoComanda=mesa&numeroComanda=2
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tipoComanda = urlParams.get('tipoComanda');
        const numeroComanda = urlParams.get('numeroComanda');
        const cnpj = urlParams.get('cnpj');
        const login = urlParams.get('login')
            setCnpj(cnpj)
        const url = `http://suporte.bedinfoservices.com.br:99/appGarline/retornaApiRestaurante.php?cnpj=${cnpj}`;
            axios
                .post(url)
                .then((response)=>{
                    setResposta(response);
                })
            const Dados = {
                tipoComanda: tipoComanda,
                numeroComanda: numeroComanda,
                cnpj: cnpj
            }
            localStorage.setItem('dados', JSON.stringify(Dados));
            localStorage.setItem('login', login);
            const timeout = setTimeout(() => {
            if(tipoComanda === "MESA"){
                navigate('/Main')
            } 
            else if(tipoComanda === "CARTAO"){
                navigate('/Main')
            }
            else if (tipoComanda === "DELIVERY"){{
                navigate('/Main')
            }} 
            else if (login === "GARCOM"){{
              navigate('/LoginGarcom')
            }}
            else if (login === "TERMINAL"){{
                navigate('/LoginAdm')
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
                localStorage.setItem('empresa', JSON.stringify(getdata.data))
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
