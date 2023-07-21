import { React, useState, useEffect } from 'react'
import '../../../../Styles/StyleEndereco.css'
import { api } from '../../../../conecções/api';
import ModalError from '../../../erros/ModalError'

export default function modal({ user, item, setIsOpenUserDados}){
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        setNome(item.nome)
        setTelefone(item.numero_telefone)
        setDataNascimento(item.data_nascimento)
    }, [])
    
    const Salvar = () => {
        api
            .post(`/alterarDadosCliente/${user.uid}`, {
                firebase_token: user.uid,
                nome: nome,
                numero_telefone: telefone,
                data_nascimento: dataNascimento
            })
            .then((response)=>{
                window.location.reload()
            })
            .catch((error) => {
                setError(error.message)
                setModalError(true)
            });
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
                        <div className="coolinput">
                            <label htmlFor="input" className="text"> Nome </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={nome}
                                onChange={(e)=> setNome(e.target.value)}
                            />
                        </div>
                        <div className="coolinput">
                            <label htmlFor="input" className="text"> Celular (xx) xxxxx-xxxx </label>
                            <input
                                type='text'
                                placeholder='Digite seus Dados...'
                                name='input'
                                className='input'
                                value={telefone}
                                onChange={(e)=> setTelefone(e.target.value)}
                            />
                        </div>
                        <div className="coolinput">
                            <label htmlFor="input" className="text"> Data de Nascimento xx/xx/xxxx </label>
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
                {modalError && <ModalError setModalError={setModalError} error={error} />}
            </div>
        </div>
    </>
  );
};