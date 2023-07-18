import { React, useState, useEffect } from 'react'
import '../../Usuarios/UsuariosInfo/partesUser/endereco.css'
import axios from 'axios';
import ModalEndereco from '../../Usuarios/UsuariosInfo/partesUser/ModalEndereco'
import ModalCadastrarEndereco from '../../Usuarios/UsuariosInfo/partesUser/ModalCadastrarEndereco'

export default function Endereços ({ user, enderecoSelecionado, setEnderecoSelecionado }){
    const [endereco, setEndereco] = useState([]);
    const [isOpenModalEndereco, setIsOpenModalEndereco] = useState(false);
    const [enderecoMudar, setEnderecoEditar] = useState('');
    const [isOpenCadastrarEndereco, setIsOpenCadastrarEndereco] = useState(false);
    const [listaTamanhosAtivos, setListaTamanhosAtivos] = useState(null);
    const [selectedRadioIndex, setSelectedRadioIndex] = useState(null);
    
    const RadioEndereco = (item, index) => {
        setSelectedRadioIndex(index);
        setEnderecoSelecionado(item)
    };
    
    useEffect(()=>{
        const uidToken = localStorage.getItem('uidToken')
        axios
            .get(`http://192.168.0.100:9865/enderecos/${uidToken}`)
            .then((getdata)=>{
                setEndereco(getdata.data)
            });
    }, []);

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

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
                    endereco.map((item, index)=>
                    <div className='descricaoendereco' onClick={() => RadioEndereco(item, index)} key={item.APELIDO}>
                        <div className='enderecoApelido'> 
                            <div className='Card-Icon'>
                                <input type='radio' name='endereco' checked={selectedRadioIndex === index} onChange={() => {}}/>
                                    {selectedRadioIndex === index 
                                    ? (<div className='iconePrato-acesso'></div>)
                                    : (<div className='iconePrato-apagado'></div>) 
                                    }
                            </div>
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

        </div>
    )
}