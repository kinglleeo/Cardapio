import { React } from 'react';
import './login.css'
import Footer from '../../Footer/Footer'
import LoginHeader from './LoginHeader'
import LoginGoogle from './LoginMetodos/LoginGoogle'
import { getRedirectResult, GoogleAuthProvider,  } from "firebase/auth";
import { auth } from './Firebase/firebaseConfig'

export default function Login(){

    getRedirectResult(auth)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            signInWithCredential(auth, credential)
        })
        .catch((error) => {
            console.log(error)
        });

    return(
        <div className='pagina'>
            <div className='Main'>
                <div>
                    <LoginHeader/>
                </div>
                <div className='MainLogin'>
                    <div className='MainLoginTexto'> Acesse sua Conta </div>
                        <LoginGoogle/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}