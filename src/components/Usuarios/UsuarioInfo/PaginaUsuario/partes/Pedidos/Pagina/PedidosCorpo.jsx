import { React, useState, useEffect } from 'react'
import './pedidoscorpo.css'

export default function PedidosCorpo(){
    const [dados, setDados] = useState([]);
    console.log(dados)
    useEffect(()=>{
        const dados = localStorage.getItem('dados')
            setDados(JSON.parse(dados))
    }, [setDados])


    return(
        <div>
            <div className='pedidosClienteCard'>
                <div className='clienteCardTipo'>
                    <div className='cardMargin'> {dados.tipo} </div>
                    <div className='cardMargin'> n° {dados.numerocomanda}  </div>
                </div>
            </div>
        </div>
    )
}