import React, { useEffect, useState } from 'react';
import './login.css'
import { signInWithRedirect, signInWithPopup, signInWithEmailAndPassword,  } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider,  } from './firebaseConfig';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const navigate = useNavigate();
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isPC = !isAndroid && !isIOS;

    const Email =(event)=>{
        setEmail(event.target.value)
    }
    const Senha =(event)=>{
        setSenha(event.target.value)
    }

    const logar=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/')
            })
            .catch((error) => {
                alert('Usuario não encontrado');
            });
    }

    const googleLogin=()=>{
        signInWithRedirect(auth, provider)
        .then((result) => {
            navigate('/');          
        })
        .catch((error) => {
            alert('nao econtrado')
        });
    }

    return(
        <div>
            <div className="wrapper">
                <div>
                    <Link to='/CriarConta'>
                        <div className='cadastro' > Cadastro </div>
                    </Link>
                </div>
                <div className="logo">
                    <img src='https://image.pngaaa.com/419/263419-middle.png'></img>
                </div>
                    <div className="card-titulo"> LOGAR </div>
                <div className="card-dados">
                    <div className="form-field d-flex align-items-center">
                        <input type="text" name="Email" id="email" placeholder="Email" onChange={Email}/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <input type="password" name="senha" id="senha" placeholder="Senha" onChange={Senha}/>
                    </div>
                        <button className="btn mt-3" onClick={logar}> LOGAR </button>
                </div>
                <div>
                    <div className='ou'> OU </div>
                </div>
                {isAndroid && (
                    <div>
                        <button className='btn-Google' onClick={googleLogin}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                </svg>  
                            </span>
                            Logar usando Conta Google 
                        </button>
                    </div>
                )}
                {isPC && (
                    <div>
                        <button className='btn-Google' onClick={googleLogin}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                </svg>  
                            </span>
                            Logar usando Conta Google 
                        </button>
                    </div>
                )}
                {isIOS && (
                    <div>
                        <span className=""></span>
                        <button className='btn-Apple'> Logar usando Conta Apple </button>
                    </div>
                )}

                <div>
                
                </div>

            </div>
        </div>
    )
}