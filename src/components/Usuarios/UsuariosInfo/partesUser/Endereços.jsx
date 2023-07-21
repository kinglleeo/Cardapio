import { React, useState, useEffect } from 'react'
import '../../../../Styles/StyleEndereco.css'
import { api } from '../../../../conecções/api';
import ModalEndereco from './ModalEndereco'
import ModalCadastrarEndereco from './ModalCadastrarEndereco'
import ModalError from '../../../erros/ModalError'

export default function Endereços ({ user }){
    const [endereco, setEndereco] = useState([]);
    const [isOpenModalEndereco, setIsOpenModalEndereco] = useState(false);
    const [enderecoMudar, setEnderecoEditar] = useState('');
    const [isOpenCadastrarEndereco, setIsOpenCadastrarEndereco] = useState(false);
    const [listaTamanhosAtivos, setListaTamanhosAtivos] = useState(null);
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(()=>{
        const uidToken = localStorage.getItem('uidToken')
            api
                .get(`/enderecos/${uidToken}`)
                .then((getdata)=>{
                    setEndereco(getdata.data)
                })
                .catch((error) => {
                    setError("Erro no enderecos")
                    setModalError(true)
                });
    }, [user]);

    const editarEndereco=(item)=>{
        setIsOpenModalEndereco(true)
        setEnderecoEditar(item)
    }

    const toggleListaTamanhos = (IdEndereco) => {
        if (listaTamanhosAtivos === IdEndereco) {
            setListaTamanhosAtivos(null);
        } else {
            setListaTamanhosAtivos(IdEndereco);
        }
    }

    function capitalizeFirstLetter(str) {
        const parts = str.split('|');
        if (parts.length === 2) {
          return parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
        } else {
          return str; 
        }
      }

    return(
        <div className='endereços'>
            <div className='tituloEnderecos'>
                <div className='iconeEndereco'></div>
                <div className='nomeEndereco'> Endereços </div>
                <button className='btnCadastrar' onClick={()=> setIsOpenCadastrarEndereco(true)} > Novo Endereço</button>
            </div>
            <div className='endereco'>
                {Array.isArray(endereco) ?(
                    endereco.map((item)=>
                    <div key={item.APELIDO} className='descricaoendereco'>
                        <div className='enderecoApelido'> 
                            <div className='textoApelido'> {capitalizeFirstLetter(item.APELIDO.toLowerCase())} </div>
                            <div className='btneditarendereco'>
                                <button className='BtnEditar' onClick={()=> editarEndereco(item)}>
                                    <div className='iconeEditar'></div>
                                </button>
                            </div>
                            <div className='caixaBtnExpandir' onClick={() => toggleListaTamanhos(item.ID)}>
                                {listaTamanhosAtivos === item.ID ? <div className='iconeEnderecoUp tamanhoIcone'></div> : <div className='iconeEnderecoDown tamanhoIcone'></div>}
                            </div>
                        </div>
                            {listaTamanhosAtivos === item.ID ? (
                                <div>
                                    <div className='caixaEndereco'>
                                <div className='enderecoRua'>
                                    <div className='tituloRua'> Rua </div>
                                    <div className='textoRua'> {capitalizeFirstLetter(item.RUA.toLowerCase())} </div>
                                </div>
                                <div className='enderecoNumero'> 
                                    <div className='tituloRua'> Numero </div>
                                    <div className='textoRua'> {item.NUMERO} </div>
                                </div>
                            </div>
                            <div>
                                <div className='tituloRua'> Referencia </div>
                                <div className='textoRua'> {capitalizeFirstLetter(item.REFERENCIA.toLowerCase())} </div>
                            </div>
                            <div>
                                <div className='tituloRua'> Bairro </div>
                                <div className='textoRua'> {capitalizeFirstLetter(item.BAIRRO.toLowerCase())} </div>
                            </div>
                            <div>
                                <div className='tituloRua'> Cidade </div>
                                <div className='textoRua'> {capitalizeFirstLetter(item.CIDADE.toLowerCase())} </div>
                            </div>
                                </div>
                            ) : null}
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
                <div>
                    {modalError && <ModalError setModalError={setModalError} error={error} />}
                </div>
        </div>
    )
}