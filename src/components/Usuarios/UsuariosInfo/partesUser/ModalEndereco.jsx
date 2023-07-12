import { React, useState} from 'react'
import './dados.css'
import axios from 'axios';
import { useEffect } from 'react';

export default function modal({ user, item, setIsOpenModalEndereco}){
    const [apelido, setApelido] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const [cidadesAceitas, setCidadesAceitas] = useState('');
    const [bairrosAceitos, setBairrosAceitos] = useState('');

    useEffect(()=>{
        setApelido(item.apelido)
        setRua(item.rua)
        setNumero(item.numero)
        setBairro(item.bairro)
        setCidade(item.cidade)
        setEstado(item.estado)
    }, [])
    
    const Salvar = () => {
        axios
            .post(`http://192.168.0.100:9865/alterarDadosCliente/${user.uid}`, {
                apelido: apelido,
                rua: rua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            })
            .then((response)=>{
                alert('Dados Salvos')
                setIsOpenModalEndereco(false)
            })
            .catch((error)=>{
                console.log(error)
            })
    };
      
    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenModalEndereco(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenModalEndereco(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                    <div className='modalTitulo'> Editar </div>
                    <div className='itensModal'>
                        <div class="coolinput">
                            <label for="input" className="text"> Apelido </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={apelido}
                                onChange={(e)=> setApelido(e.target.value)}
                            />
                        </div>
                        <div class="coolinput">
                            <label for="input" className="text"> Rua </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={rua}
                                onChange={(e)=> setRua(e.target.value)}
                            />
                        </div>
                        <div class="coolinput">
                            <label for="input" className="text"> Numero </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={numero}
                                onChange={(e)=> setNumero(e.target.value)}
                            />
                        </div>
                        <div class="coolinput">
                            <label for="input" className="text"> Cidade </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={cidade}
                                onChange={(e)=> setCidade(e.target.value)}
                            />
                        </div>
                        <div class="coolinput">
                            <label for="input" className="text"> Estado </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={estado}
                                onChange={(e)=> setEstado(e.target.value)}
                            />
                        </div>
                        {item.cidade !== null || cidade !==null ? (
                            <div class="coolinput">
                                <label for="input" className="text"> Bairro </label>
                                <input
                                    type='text'
                                    placeholder='Digite seus Dados...'
                                    name='input'
                                    className='input'
                                    value={bairro}
                                    onChange={(e)=> setBairro(e.target.value)}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
                <div>
                    <button className='btnSalvar enderecobtn' onClick={()=> Salvar()}> Salvar </button>
                </div>
            </div>
        </div>
    </>
  );
};