import React from 'react'
import './login.css'

export default function Login(){


    return(
        <div>
            <div className="wrapper">
                <div className="logo">
                    <img src='https://image.pngaaa.com/419/263419-middle.png'></img>
                </div>
                    <div className="card-titulo"> LOGAR </div>
                <form className="card-dados">
                    <div className="form-field d-flex align-items-center">
                        <input type="text" name="userName" id="userName" placeholder="Nome"/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <input type="password" name="password" id="pwd" placeholder="Senha"/>
                    </div>
                        <button className="btn mt-3"> LOGAR </button>
                </form>
                <div>
                    <div className='ou'> OU </div>
                </div>
                <div>
                    <span className=""></span>
                    <button className='btn-Google'> Logar usando Conta Google </button>
                </div>
                <div>
                    <span className=""></span>
                    <button className='btn-Apple'> Logar usando Conta Apple </button>
                </div>
            </div>
        </div>
    )
}