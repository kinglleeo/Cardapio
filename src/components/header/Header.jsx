import { React, useEffect, useState } from 'react'
import './StyleHeaders.css'
import { api } from '../../conecções/api'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Usuarios/LoginPage/Firebase/firebaseConfig';

export default function Header (){
    const [infoClientes, setInfoClientes] = useState([])
    const [cnpj, setCnpj] = useState('')
    const [user, setUser] = useState('');
    const navigate = useNavigate()

    useEffect(()=>{
        const cnpj = localStorage.getItem('cnpj');
            setCnpj(cnpj)       
        api
            .get(`/dadosEmpresa/${cnpj}`)
            .then((getdata)=>{
                setInfoClientes(getdata.data);
            }); 
    }, [setInfoClientes])

    useEffect(()=>{
      const usuario = onAuthStateChanged(auth, (user)=>{
          setUser(user)
      })
    }, []); 
    
    const PaginaUsuario =()=>{
        navigate('/PaginaUsuario')
    }

    return(
        <div className='paginaHeader'>
        <div className='header-header'>
                <div className='header-login'>
                    {user !== '' ? (
                        <div className='caixaIconeUsuario'>
                            <button className='iconeUsuario' onClick={PaginaUsuario}></button>
                        </div>
                    ) : ('')}
                </div>
                <div className='logo-garline-header'>
                    <div className='logo-garline'></div>
                </div>
            </div>
        <div className='Main-header'>   
            {Array.isArray(infoClientes) ?  (
                infoClientes.map((item)=>
                <div>
                    <div className='body-header'>
                    <div className='banner-garline'>
                        <div className='banner-infos'>
                            <div className='caixa-icone'>
                                <div className='icone-tempo'></div>
                            </div>
                            <div className='tempo-banner'>
                            <div> {item.TEMPO_ESPERA} Minutos </div>
                            </div>
                        </div>
                        <div className='banner-infos'>
                            <div className='caixa-icone'>
                                <div className='icone-horario'></div>
                            </div>
                            <div className='tempo-banner'>
                                <div>
                                    <div>Abre {item.HORA_ABERTURA.slice(0, 5)}</div>
                                    <div>Fecha {item.HORA_FECHAMENTO.slice(0, 5)}</div>
                                </div>
                            </div>
                        </div>
                        <div className='banner-infos'>
                            <div className='caixa-icone'>
                                <div className='icone-Whatsapp'></div>
                            </div>
                            <div className='tempo-banner'>
                                <div>{item.WHATS.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")}</div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-header'>
                        <div className='endereço-header'> {item.LOGRADOURO + ", " + item.BAIRRO + ", N°" + " " + item.NUMERO + ", " + item.CIDADE + " - " + item.UF} </div>
                    </div>
                </div>    
                <div className='logo-restaurante'>
                    <img src={'data:image/png;base64,' + item.FOTO}  alt='Restaurante' className='img-restaurante-logo' />
                </div>
            </div> 
            )) :null}
        </div>
    </div>
    )
}