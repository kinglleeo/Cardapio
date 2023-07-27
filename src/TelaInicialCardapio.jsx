import { React, useState, useEffect } from 'react'
import './Styles/StyleTelaInicial.css'
import { useNavigate } from 'react-router-dom'
import { iniciarRota } from './conecções/api';
import { api } from './conecções/api';
import ModalError from './components/erros/ModalError'
import { auth } from './components/Usuarios/LoginPage/Firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from 'firebase/auth';
import axios from 'axios';

export default function TelaInicialCardapio(){
    const navigate = useNavigate()
    const [resposta, setResposta] = useState('');
    const [infoClientes, setInfoClientes] = useState([]);
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');
    const [tipoComanda, setTipoComanda] = useState('');
    const [numeroComanda, setNumeroComanda] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [login, setLogin] = useState('');
   
    //http://suporte.bedinfoservices.com.br:3000/?17011d0b=43595a595a5e4a5251565547555c&00061d0e2e001e020f0204=190a1e00&1a1a00041f00300c0c070b1200=46
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const tipoComanda = urlParams.get('00061d0e2e001e020f0204');
            descriptTipoComanda(tipoComanda)
        const numeroComanda = urlParams.get('1a1a00041f00300c0c070b1200');
            descriptNumeroComanda(numeroComanda)
        const cnpj = urlParams.get('17011d0b');
            descriptCnpj(cnpj)
        const login = urlParams.get('18000a0803');
            descriptLogin(login)
    }, []);
    const descriptTipoComanda =(tipoComanda)=>{
        axios
            .get(`http://suporte.bedinfoservices.com.br:9865/descript/${tipoComanda}`)
            .then((response)=>{
                if(response.data === "TO"){
                    setTipoComanda(null);
                } else {
                    setTipoComanda(response.data.toUpperCase());
                }
            })
    }
    const descriptNumeroComanda =(numeroComanda)=>{
        axios
            .get(`http://suporte.bedinfoservices.com.br:9865/descript/${numeroComanda}`)
            .then((response)=>{
                if(response.data === "TO"){
                    setNumeroComanda(null);
                } else {
                    setNumeroComanda(response.data);
                }
            })
    }
    const descriptCnpj =(cnpj)=>{
        axios
            .get(`http://suporte.bedinfoservices.com.br:9865/descript/${cnpj}`)
            .then((response)=>{
                if(response.data === "TO"){
                    setCnpj(null);
                } else {
                    setCnpj(response.data);
                }
            })
    }
    const descriptLogin =(login)=>{
        axios
            .get(`http://suporte.bedinfoservices.com.br:9865/descript/${login}`)
            .then((response)=>{
                if(response.data === "TO"){
                    setLogin(null);
                } else {
                    setLogin(response.data);
                }
            })
    }

    useEffect(()=>{
        const url = `http://suporte.bedinfoservices.com.br:99/appGarline/retornaApiRestaurante.php?cnpj=${cnpj}`;
            api
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
                .catch((error) => {
                    setError('Nenhum Restaurante Encontrado')
                    setModalError(true)
                });
    }, [cnpj])
    
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
                        irParaMenu(dadosEmpresa, dados)
                    } 
                    else if(tipoComanda === "CARTAO"){
                        irParaMenu(dadosEmpresa, dados )
                    }
                    else if (login === "TERMINAL"){{
                        irParaTerminal(dadosEmpresa, login, dados)
                    }}
                    else if (login === "GARCOM"){{
                        irParaGarcom(dadosEmpresa, login, dados)
                    }}
                    else if (tipoComanda === "DELIVERY"){{
                        irParaMenu(dadosEmpresa, dados)
                    }}
                })
                .catch((error) => {
                    setError("Erro nos Dados da Empresa")
                    setModalError(true)
                });
    }
    const irParaMenu=(dadosEmpresa, dados)=>{
        const timeout = setTimeout(() => {
            localStorage.clear()
            auth.onAuthStateChanged((user) => {
                localStorage.setItem('uidToken', user.uid)
            });
            localStorage.setItem('empresa', JSON.stringify(dadosEmpresa))
            localStorage.setItem('dados', JSON.stringify(dados));
            
                OneSignal = window.OneSignal || [];
                    OneSignal.push(function() {
                    OneSignal.init({
                        appId: "770d044d-d725-43f1-989e-6b3d27e71df5"
                    })
                });
                OneSignal.on('init', function() {
                    OneSignal.showNativePrompt();
                });
                OneSignal.on('subscriptionChange', function (isSubscribed) {
                    if (isSubscribed) {
                        OneSignal.getUserId()
                            .then(function(playerId) {
                                localStorage.setItem('idNotificacao', playerId);
                            });
                    }
                });

            navigate('/Main')
        }, 3000);
        return () => {
            clearTimeout(timeout);
    }}
    const irParaTerminal=(dadosEmpresa, login, dados)=>{
        const timeout = setTimeout(() => {
            localStorage.clear()
            signOut(auth)
            localStorage.setItem('empresa', JSON.stringify(dadosEmpresa))
            localStorage.setItem('login', login);
            localStorage.setItem('dados', JSON.stringify(dados));
            navigate('/LoginAdm')
        }, 3000);
        return () => {
            clearTimeout(timeout);
    }}
    const irParaGarcom=(dadosEmpresa, login, dados)=>{
        const timeout = setTimeout(() => {
            localStorage.clear()
            signOut(auth)
            localStorage.setItem('empresa', JSON.stringify(dadosEmpresa))
            localStorage.setItem('login', login);
            localStorage.setItem('dados', JSON.stringify(dados));
            navigate('/LoginGarcom')
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
            {modalError && <ModalError setModalError={setModalError} error={error} />}
        </div>
    )
}
