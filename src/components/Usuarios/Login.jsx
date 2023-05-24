import React, { useEffect, useState } from 'react';
import './login.css'
import { signInWithEmailAndPassword, signInWithRedirect,  signInWithCredential, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';
import { auth, provider } from './firebaseConfig';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    

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
                console.log('logado')
            })
            .catch((error) => {
                alert('Usuario não encontrado');
            });
    }

    

    const googleLogin=()=>{
        signInWithRedirect (auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            console.log(result.user)
            console.log('logado com sucesso')
        })
        .catch((error) => {
            alert('nao econtrado')
            const credential = GoogleAuthProvider.credentialFromError(error);
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
                <div>
                    <span className=""></span>
                    <button className='btn-Google' onClick={googleLogin}> Logar usando Conta Google </button>
                </div>
                <div>
                    <span className=""></span>
                    <button className='btn-Apple'> Logar usando Conta Apple </button>
                </div>
            </div>
        </div>
    )
}