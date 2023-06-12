import { React, useEffect} from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import LoginGoogleFacebook from './LoginMetodos/LoginGoogleFacebook';
import LoginEmailSenha from './LoginMetodos/LoginEmailSenha';


export default function Login(){
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            navigate('/');
          }
        });
        return () => {
          unsubscribe();
        };
      }, [navigate]);
  
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
                <div className='btn-loginGoogle'>
                    <LoginGoogleFacebook/>
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}