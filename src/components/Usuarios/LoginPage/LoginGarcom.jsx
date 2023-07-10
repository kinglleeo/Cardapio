import { React } from 'react';
import './login.css'
import Footer from '../../Footer/Footer'
import LoginHeader from './LoginHeader'
import MetodoLoginGarcom from './LoginMetodos/MetodoLoginGarcom'

export default function Login(){
  
    return(
        <div className='pagina'>
            <div className='Main'>
                <div>
                    <LoginHeader/>
                </div>
                <div className='MainLogin'>
                    <div className='MainLoginTexto'> Login Atendente </div>
                        <MetodoLoginGarcom/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}