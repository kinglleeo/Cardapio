import { React, useState} from 'react'
import './dados.css'
import axios from 'axios';
import { useEffect } from 'react';

export default function modal({ user, item, setIsOpenUserDados}){
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    useEffect(()=>{
        setNome(item.nome)
        setTelefone(item.numero_telefone)
        setDataNascimento(item.data_nascimento)
    }, [])
    
    const Salvar = () => {
        axios
            .post(`http://192.168.0.100:9865/alterarDadosCliente/${user.uid}`, {
                firebase_token: user.uid,
                nome: nome,
                numero_telefone: telefone,
                data_nascimento: dataNascimento
            })
            .then((response)=>{
                alert('Dados Salvos')
                setIsOpenUserDados(false)
            })
            .catch((error)=>{
                console.log(error)
            })
    };

    function formataData(){
        let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth()+1).toString().padStart(2, '0'),
        ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
    }
      
    return(
    <>
        <div className='modalUser' onClick={() => setIsOpenUserDados(false)} />
            <div className='centeredModal'>
            <div className='modalUsuario'>
            <button className='closeBtn' onClick={() => setIsOpenUserDados(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalEditContent'> 
                    <div className='modalTitulo'> Editar </div>
                    <div className='itensModal'>
                        <div class="coolinput">
                            <label for="input" className="text"> Nome </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={nome}
                                onChange={(e)=> setNome(e.target.value)}
                            />
                        </div>
                        <div class="coolinput">
                            <label for="input" className="text"> Celular (xx) xxxxx-xxxx </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={telefone}
                                onChange={(e)=> setTelefone(e.target.value)}
                            />
                        </div>
                        <div class="coolinput">
                            <label for="input" className="text"> Data de Nascimento xx/xx/xxxx </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={dataNascimento}
                                onChange={(e)=> setDataNascimento(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btnSalvar' onClick={()=> Salvar()}> Salvar </button>
                </div>
            </div>
        </div>
    </>
  );
};