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
    const [cnpj, setCnpj] = useState('');
    
    
    //http://suporte.bedinfoservices.com.br:3000/?cnpj=76787191000145&tipoComanda=mesa&numeroComanda=2
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const tipoComanda = urlParams.get('tipoComanda');
        const numeroComanda = urlParams.get('numeroComanda');
        const cnpj = urlParams.get('cnpj');
            setCnpj(cnpj);
        const login = urlParams.get('login');  
        const url = `http://suporte.bedinfoservices.com.br:99/appGarline/retornaApiRestaurante.php?cnpj=${cnpj}`;
            axios
                .post(url)
                .then((response)=>{
                    setResposta(response);
                    const parts = response.data.split('|');
                    if (parts.length === 2) {
                      const rotalink = parts[0].trim();
                      const rotaBase = parts[1].trim();
                      const RotaFinal = `${rotalink}:${rotaBase}`;
                          iniciarRota(RotaFinal)
                          Iniciar(cnpj, tipoComanda, numeroComanda, login)
                    }
                })
                
    }, []);

    const Iniciar=(cnpj, tipoComanda, numeroComanda, login)=>{
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
                const dadosEmpresa = getdata.data;
                const dados = {
                    tipoComanda: tipoComanda,
                    numeroComanda: numeroComanda,
                    cnpj: cnpj
                    }   
                    if(tipoComanda === "MESA"){
                        irParaMenu(dados, dadosEmpresa)
                    } 
                    else if(tipoComanda === "CARTAO"){
                        irParaMenu(dados, dadosEmpresa)
                    }
                    else if (login === "TERMINAL"){{
                        irParaTerminal(dados, login, dadosEmpresa)
                    }}
                    else if (login === "GARCOM"){{
                        irParaGarcom(dados, login, dadosEmpresa)
                    }}
                    else if (tipoComanda === "DELIVERY"){{
                        irParaMenu(dados, dadosEmpresa)
                    }}
                });
    }
    const irParaMenu=(dados, dadosEmpresa)=>{
        const timeout = setTimeout(() => {
            localStorage.clear()
            localStorage.setItem('dados', JSON.stringify(dados));
            localStorage.setItem('empresa', JSON.stringify(dadosEmpresa))
            console.log(dados)
            console.log(dadosEmpresa)
            navigate('/Main')
        }, 3000);
        return () => {
            clearTimeout(timeout);
    }}
    const irParaTerminal=(dados, login, dadosEmpresa)=>{
        const timeout = setTimeout(() => {
            localStorage.clear()
            localStorage.setItem('dados', JSON.stringify(dados));
            localStorage.setItem('login', login);
            localStorage.setItem('empresa', JSON.stringify(dadosEmpresa))
            navigate('/LoginAdm')
            console.log(dados)
            console.log(dadosEmpresa)
        }, 3000);
        return () => {
            clearTimeout(timeout);
    }}
    const irParaGarcom=(dados, login, dadosEmpresa)=>{
        const timeout = setTimeout(() => {
            localStorage.clear()
            localStorage.setItem('dados', JSON.stringify(dados));
            localStorage.setItem('login', login);
            localStorage.setItem('empresa', JSON.stringify(dadosEmpresa))
            navigate('/LoginGarcom')
            console.log(dados)
            console.log(dadosEmpresa)
        }, 3000);
        return () => {
            clearTimeout(timeout);
    }}


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
