import React, { useEffect, useState } from 'react';
import './login.css'
import { signInWithCredential, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';

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

        
    window.onload = function () {
        google.accounts.id.initialize({
            client_id: "977256094975-3dk0e1a6mo06bl19n89k9750lkh8jdfp.apps.googleusercontent.com",
            callback: handleCredentialResponse
        })
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { type: "standard", shape:"rectangular", theme: "filled_blue", text:"signin_with", size: "large", logo_alignment:"left", width:"100%" }  // customization attributes
            );
        google.accounts.id.prompt();
    }

    const handleCredentialResponse=(googleUser)=>{
        var id_token = googleUser.credential;
        var credential = GoogleAuthProvider.credential(id_token)
            signInWithCredential(auth, credential)
                .then(
                    navigate('/')
                )
                .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The credential that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
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
                
                {isIOS && (
                    <div>
                        <span className=""></span>
                        <button className='btn-Apple'> Logar usando Conta Apple </button>
                    </div>
                )}

                <div className='btn-loginGoogle'>
                    <div id='buttonDiv'></div>
                </div>

            </div>
        </div>
    )
}