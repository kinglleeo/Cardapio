import { React } from 'react';
import './login.css'
import Footer from '../../Footer/Footer'
import LoginHeader from './LoginHeader'
import LoginGoogleFacebook from './LoginMetodos/LoginGoogleFacebook'

export default function Login(){
  
    return(
        <div className='pagina'>
            <div className='Main'>
                <div>
                    <LoginHeader/>
                </div>
                <div className='MainLogin'>
                    <div className='MainLoginTexto'> Acesse sua Conta </div>
                        <LoginGoogleFacebook/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}