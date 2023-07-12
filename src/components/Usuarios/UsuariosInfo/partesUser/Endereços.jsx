import { React, useState, useEffect } from 'react'
import './endereco.css'
import axios from 'axios';
import ModalEndereco from './ModalEndereco'
import ModalCadastrarEndereco from './ModalCadastrarEndereco'

export default function Endereços ({ user }){
    //const [endereco, setEndereco] = useState([]);
    const [isOpenModalEndereco, setIsOpenModalEndereco] = useState(false);
    const [enderecoMudar, setEnderecoEditar] = useState('');
    const [isOpenCadastrarEndereco, setIsOpenCadastrarEndereco] = useState(false);

    const endereco=[    
    ]

    useEffect(()=>{
        axios
            .get(`http://192.168.0.100:9865/enderecos/${user.uid}`)
            .then((getdata)=>{
                setEndereco(getdata.data)
            });
    }, [])

    const editarEndereco=(item)=>{
        setIsOpenModalEndereco(true)
        setEnderecoEditar(item)
    }

    return(
        <div className='endereços'>
            <div className='tituloEnderecos'> Endereços </div>
            <button onClick={()=> setIsOpenCadastrarEndereco(true)} > Cadastrar Novo Endereço</button>
            <div className='endereco'>
                {Array.isArray(endereco) ?(
                    endereco.map((item)=>
                    <div className='descricaoendereco'>
                        <div className='enderecoApelido'> 
                            <div className='textoApelido'> {item.apelido} </div>
                            <div className='btneditarendereco'>
                                <button className='BtnEditar' onClick={()=> editarEndereco(item)}>
                                    <div className='iconeEditar'></div>
                                </button>
                            </div>
                        </div>
                        <div className='caixaEndereco'>
                            <div className='enderecoRua'>
                                <div className='tituloRua'> Rua </div>
                                <div className='textoRua'> {item.rua} </div>
                            </div>
                            <div className='enderecoNumero'> 
                                <div className='tituloRua'> Numero </div>
                                <div className='textoRua'> {item.numero} </div>
                            </div>
                        </div>
                        <div>
                            <div className='tituloRua'> Bairro </div>
                            <div className='textoRua'> {item.bairro} </div>
                        </div>
                        <div className='caixaEndereco'>
                            <div className='enderecoRua'>
                                <div className='tituloRua'> Cidade </div>
                                <div className='textoRua'> {item.cidade} </div>
                            </div>
                            <div className='enderecoNumero'>
                                <div className='tituloRua'> Estado </div>
                                <div className='textoRua'> {item.estado} </div>
                            </div>
                        </div>
                    </div>
                    )
                ) : null}
            </div>
                <div>
                    {isOpenModalEndereco && <ModalEndereco user={user} item={enderecoMudar} setIsOpenModalEndereco={setIsOpenModalEndereco}/>}
                </div>
                <div>
                    {isOpenCadastrarEndereco && <ModalCadastrarEndereco user={user} setIsOpenCadastrarEndereco={setIsOpenCadastrarEndereco}/>}
                </div>

        </div>
    )
}