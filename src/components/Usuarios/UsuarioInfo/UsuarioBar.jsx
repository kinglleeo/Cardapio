import React, { useEffect } from 'react'
import './paginausuario.css'
import Deslogar from '../LoginPage/LoginMetodos/deslogar'
import { Link } from 'react-router-dom'

export default function UsuarioBar(){

    const username=()=>{
        
    }
    return(
        <div className='UserBar'>
            <div className='userbar-deslogar'>
                <Deslogar/>
            </div>
            <div className='userbar-name'>
                <div> {username()} </div>
            </div>
            <div className='userbar-icon'>
                <Link to='/PaginaUsuario'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}