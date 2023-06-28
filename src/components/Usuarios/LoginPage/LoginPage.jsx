import { React } from 'react';
import './login.css'
import Footer from '../../Footer/Footer'
import LoginHeader from './LoginHeader'
import LoginGoogle from './LoginMetodos/LoginGoogle'

export default function Login(){
  

    ///loginAtendente/:login/senha

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