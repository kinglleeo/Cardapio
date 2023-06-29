import React from 'react'
import './StyleHeaders.css'
import { useNavigate } from 'react-router-dom';

export default function cartHeader(){
    const navigate = useNavigate();

    const Voltar =()=>{
        navigate('/Main')
    }
    
    return(
        <div className='cartHeaderTopo'>
            <div className='caixa-seta'>
                <div className='setaEsquerda' onClick={Voltar}></div>
            </div>
            <div className='logo-garline-header'>
                <div className='logo-garline'></div>
            </div>
        </div>
    )
}