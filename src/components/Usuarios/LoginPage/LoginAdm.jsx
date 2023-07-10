import { React } from 'react';
import './login.css'
import Footer from '../../Footer/Footer'
import LoginHeader from './LoginHeader'
import MetodoLoginAdm from './LoginMetodos/MetodoLoginAdm'

export default function Login(){
  
    return(
        <div className='pagina'>
            <div className='Main'>
                <div>
                    <LoginHeader/>
                </div>
                <div className='MainLogin'>
                    <div className='MainLoginTexto'> Login Atendente </div>
                        <MetodoLoginAdm/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}