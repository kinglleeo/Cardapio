import { React, useState, useEffect } from 'react'
import { TotalCart } from './total'
import './cartpagbar.css'
import { useNavigate } from 'react-router-dom'

export function CartPagBar(){
    const navigate = useNavigate()

    const handleCotinuar=()=>{
        navigate('/')
    }
    return( 
        <div>
            <div className='cartpagbar'>
                <div className='cartpagbar-00'>
                    <button className='botao-000' onClick={handleCotinuar}>Continuar</button>
                </div>
                <div className='cartpagbar-02'>
                    <TotalCart/>
                </div>
                <div className='cartpagbar-01'>
                    <button className='botao-000'> Finalizar e Pagar </button>
                </div>
                
                
            </div>
        </div>
    )
}