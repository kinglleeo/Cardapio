import { React } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import LoginEmailSenha from './LoginMetodos/LoginEmailSenha';
import LoginTeste from './LoginMetodos/LoginTeste'
import LoginGoogleFacebook from './LoginMetodos/LoginGoogleFacebook'

export default function Login(){
  
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
                <div>
                <div>
                    <LoginEmailSenha/>
                </div>
                    <div className='ou'> OU </div>
                </div>
                {
                //<div className='btn-loginGoogle'>
                  //  <LoginGoogleFacebook/>
                //</div>
                }
                {
                   <div>
                   <LoginTeste/>
                   </div>
                }
            </div>
        </div>
    )
}