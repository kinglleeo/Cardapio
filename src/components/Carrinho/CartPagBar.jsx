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
        <div className='cartpagbar'>
            <div className='pagbar'>
                <div className='btn-pagbar'>
                    <button className='btn-pagbar-btn' onClick={handleCotinuar}>Continuar</button>
                </div>
                <div className='total-pagbar'>
                    <TotalCart/>
                </div>
                <div className='btn-pagbar'>
                    <button className='btn-pagbar-btn'> Finalizar e Pagar </button>
                </div>
            </div>
        </div>
    )
}