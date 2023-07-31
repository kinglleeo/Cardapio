import { React, useState, useEffect } from 'react'
import '../../../../Styles/StyleLogin.css'
import { api } from '../../../../conecções/api'
import { useNavigate } from 'react-router-dom'
import ModalError from '../../../erros/ModalError'

export default function MetodoLoginGarcom(){
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const Nome =(event)=>{
        setNome(event.target.value)
    }
    const Senha =(event)=>{
        setSenha(event.target.value)
    }

    const LoginAdm = (nome, senha) => {
        api
            .get(`/loginPainelPedidos/${nome}/${senha}`)
            .then((response) => {
                if(response.data > 0){
                    localStorage.setItem('administrador', response.data)                    
                    navigate('/Terminal')
                } else if (response.data === 0) {
                    alert('Usuario não econtrado')
                } else if (response.data === -1) {
                    alert('error')
                } else {
                    ('error desconhecido')
                }
            })
            .catch((error) => {
                setError("Erro no loginPainelPedidos")
                setModalError(true)
            });
    };

    return(
        <div className='loginBoxDados'>
            <div className='BoxNome'>
                <input type="text" className='inputLogin' name="nome" id="nome" placeholder="Nome" onChange={Nome}/>
            </div>
            <div className='BoxNome'>
                <input type="password" className='inputLogin' name="senha" id="senha" placeholder="Senha" onChange={Senha}/>
            </div>
                <button className="btnLogin" onClick={()=> LoginAdm(nome, senha)}> ENTRAR </button>
                {modalError && <ModalError setModalError={setModalError} error={error} />}
        </div>
    )
}