import { React, useState, useEffect } from 'react'
import '../login.css'
import { api } from '../../../../conecções/api'

export default function MetodoLoginGarcom(){
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [idGarcom, setIdGarcom] = useState('')
    console.log(idGarcom)

    useEffect(()=>{
        sessionStorage.setItem('idGarcom', idGarcom)
    })
    const Nome =(event)=>{
        setNome(event.target.value)
    }
    const Senha =(event)=>{
        setSenha(event.target.value)
    }

    const LoginGarcom = (nome, senha) => {
        api
            .post(`/loginAtendente/:${nome}/:${senha}`)
            .then((response) => {
                setIdGarcom(response.data);
            })
            .catch((error) => {
                alert('Usuario não encontrado')
            })
    };
    
    return(
        <div className='loginBoxDados'>
            <div className='BoxNome'>
                <input type="text" className='inputLogin' name="nome" id="nome" placeholder="Nome" onChange={Nome}/>
            </div>
            <div className='BoxNome'>
                <input type="password" className='inputLogin' name="senha" id="senha" placeholder="Senha" onChange={Senha}/>
            </div>
                <button className="btnLogin" onClick={()=> LoginGarcom(nome, senha)}> ENTRAR </button>
        </div>
    )
}