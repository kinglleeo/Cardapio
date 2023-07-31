import { React } from 'react';
import '../../../Styles/StyleLogin.css'
import Footer from '../../Footer/Footer'
import LoginHeader from './LoginHeader'
import LoginGoogle from './LoginMetodos/LoginGoogle'
import LoginApple from './LoginMetodos/LoginApple'

export default function Login(){
   
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