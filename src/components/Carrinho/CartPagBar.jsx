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
                <div>
                    <TotalCart/>
                </div>
                <div>
                    <button onClick={handleCotinuar}>Continuar</button>
                </div>
            </div>
        </div>
    )
}