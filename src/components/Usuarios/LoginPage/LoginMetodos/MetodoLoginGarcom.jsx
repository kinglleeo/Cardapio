import { React, useState, useEffect } from 'react'
import '../login.css'

export default function MetodoLoginGarcom(){
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const Nome =(event)=>{
        setNome(event.target.value)
    }
    const Senha =(event)=>{
        setSenha(event.target.value)
    }

    return(
        <div className='loginBoxDados'>
            <div className='BoxNome'>
                <input type="text" className='inputLogin' name="nome" id="nome" placeholder="Nome" onChange={Nome}/>
            </div>
            <div className='BoxNome'>
                <input type="password" className='inputLogin' name="senha" id="senha" placeholder="Senha" onChange={Senha}/>
            </div>
                <button className="btnLogin" > ENTRAR </button>
        </div>
    )
}