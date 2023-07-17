import { React, useState, useEffect } from 'react'
import './Styles/StyleTelaInicial.css'
import { useNavigate } from 'react-router-dom'
import { iniciarRota } from './conecções/api';
import { api } from './conecções/api';
import axios from 'axios';

export default function TelaInicialCardapio(){
    const navigate = useNavigate()
    const [resposta, setResposta] = useState('');
    const [infoClientes, setInfoClientes] = useState([]);
    const [tipoComanda, setTipoComanda] = useState('');
    const [numeroComanda, setNumeroComanda] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [login, setLogin] = useState('');
    const dados = {
        tipoComanda: tipoComanda,
        numeroComanda: numeroComanda,
        cnpj: cnpj
    }
    
    //http://suporte.bedinfoservices.com.br:3000/?cnpj=76787191000145&tipoComanda=mesa&numeroComanda=2
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const tipoComanda = urlParams.get('tipoComanda');
            setTipoComanda(tipoComanda);
        const numeroComanda = urlParams.get('numeroComanda');
            setNumeroComanda(numeroComanda);
        const cnpj = urlParams.get('cnpj');
            setCnpj(cnpj);
        const login = urlParams.get('login');  
            setLogin(login);
        const url = `http://suporte.bedinfoservices.com.br:99/appGarline/retornaApiRestaurante.php?cnpj=${cnpj}`;
            axios
                .post(url)
                .then((response)=>{
                    setResposta(response);
                })
            api
                .get(`/dadosEmpresa/${cnpj}`)
                .then((getdata)=>{
                    setInfoClientes(getdata.data);
                });
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
    }, [resposta]);

    useEffect(()=>{
        const timeout = setTimeout(() => {
            if(tipoComanda === "MESA"){
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(dados));
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                navigate('/Main')
            } 
            else if(tipoComanda === "CARTAO"){
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(dados));
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                navigate('/Main')
            }
            else if (login === "TERMINAL"){{
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(dados));
                localStorage.setItem('login', login);
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                navigate('/LoginAdm')
            }}
            else if (login === "GARCOM"){{
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(dados));
                localStorage.setItem('login', login);
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                navigate('/LoginGarcom')
            }}
            else if (tipoComanda === "DELIVERY"){{
                localStorage.clear()
                localStorage.setItem('dados', JSON.stringify(dados));
                localStorage.setItem('empresa', JSON.stringify(infoClientes))
                console.log(infoClientes)
                navigate('/Main')
            }} 
          }, 3000);
          return () => {
            clearTimeout(timeout);
        };
    }, [])

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
