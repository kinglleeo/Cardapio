import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { iniciarRota } from './conecções/api';


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


const logar=()=>{
    navigate('/Login')
}

const EntrarNotLogin=()=>{
    navigate('/Main')
}

    return(
        <div>
            <div>
                <button onClick={logar}> Logar </button>
            </div>
            <div>
                <button onClick={EntrarNotLogin}> Entrar sem Login </button>
            </div>
        </div>
    )
}
