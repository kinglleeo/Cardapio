import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function TelaInicialCardapio(){
    const navigate = useNavigate()

const logar=()=>{
    navigate('/Login')
}


const EntrarNotLogin=()=>{
    navigate('/Main')
}

    return(
        <div>
            <div>
                <button onClick={logar}> Logar </button>
            </div>
            <div>
                <button onClick={EntrarNotLogin}> Entrar sem Login </button>
            </div>
        </div>
    )
}