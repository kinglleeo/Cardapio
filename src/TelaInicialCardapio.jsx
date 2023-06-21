import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { iniciarRota } from './conecções/api';
import './telainicialcardapio.css'

export default function TelaInicialCardapio(){
    const navigate = useNavigate()
    const [resposta, setResposta] = useState('');
    const [mesa, setMesa] = useState('');
    const [cnpj, setCnpj] = useState('');

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
                console.log(RotaFinal)
          }
        }
    }, [resposta]);


const logar=()=>{
    navigate('/Login')
}

const EntrarNotLogin=()=>{
    navigate('/Main')
}

    return(
        <div className='main-TelaInicial'>
            <div className='box-telainicial'>
                <div className='logo-box'>
                    <div className='logo-telainicial'></div>
                </div>
                <div className='text-box'>
                    <div>FAÇA SEU PEDIDO!</div>
                </div>
                <div className='login-box'>
                    <div className='login-box-inner' >
                        <div className='login-caixa'>
                            <div className='login-iconebox'>
                                <div className='icone-login'></div>
                            </div>
                            <div className='login-btn'>
                                <button onClick={logar} className='login-btn-telainicial'> FAZER LOGIN </button>
                            </div>
                        </div>
                        <div className='login-caixa'>
                            <div className='login-iconebox'>
                                <div className='icone-semlogin'></div>
                            </div>
                            <div className='login-btn'>
                                <button onClick={EntrarNotLogin} className='login-btn-telainicial'> COMPRAR </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
