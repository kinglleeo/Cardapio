import { React, useState, useEffect } from 'react'
import './dados.css'
import ModalUser from './ModalUser'
import { signOut } from 'firebase/auth';
import { auth } from '../../LoginPage/Firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DadosUsuarios({ user }){
    const [isOpenUserDados, setIsOpenUserDados] = useState(false);
    const [dadosCliente, setDadosCliente] = useState([]);
    const [item, setItem] = useState('');
    const [idGarline, setIdGarline] = useState('');
    const navigate = useNavigate()

    useEffect(()=>{
        const idgarline = localStorage.getItem('idCliente')
            setIdGarline(idgarline)
        const uidToken = localStorage.getItem('uidToken')
        axios
            .get(`http://192.168.0.100:9865/dadosCliente/${uidToken}`)
            .then((getdata)=>{
                setDadosCliente(getdata.data)
            });
    }, []);


    const EditarDados=(item)=>{
        setItem(item)
        setIsOpenUserDados(true)
    }

    const deslogar =()=>{
        signOut(auth)
        .then(() => {
            navigate('/Main')
        })
        .catch((error) => {
        });
    }

    function formataData(){
        let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth()+1).toString().padStart(2, '0'),
        ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
    }
    
    return(
        <div className='infos'>
                <div className='usuarioInfos'>
                    <img src={user.photoURL} className='fotoPerfil' />
                    <div className='caixaiconeLogout'><div className='iconeLogout' onClick={()=> deslogar()}></div></div>
                    <div className='itemInfos'> {Array.isArray(dadosCliente) ? dadosCliente.map((item) => item.nome) : null}
                    
                </div>
                </div>
                {Array.isArray(dadosCliente) ?
                    dadosCliente.map((item)=>
                        <div className='listaInfos'>
                            <div className='linhaEditar'>
                            <button className='BtnEditar' onClick={()=> EditarDados(item)} > 
                                <div className='editarText'> Editar </div>
                                    <div className='iconeEditar'></div>
                                </button>   
                            </div>
                            <div className='caixaUsuario'>
                                <div> Email </div>
                                <div> {item.email} </div>
                            </div>
                            <div className='caixaUsuario'>
                                <div> Celular </div>
                                <div> {item.numero_telefone} </div>
                            </div>
                            <div className='caixaUsuario'>
                                <div> Data de Nascimento </div>
                                <div> {formataData(item.data_nascimento)} </div>
                            </div>
                        </div>
                    )
                : null}
                <div>
                    {isOpenUserDados && <ModalUser user={user} item={item} setIsOpenUserDados={setIsOpenUserDados}/>}
                </div>

        </div>
    )
}