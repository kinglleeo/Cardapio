import { React, useEffect} from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import LoginGoogle from './LoginGoogle';
import LoginEmailSenha from './LoginEmailSenha';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth'
import LoginGoogle2 from './loginGoogle2'

export default function Login(){
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isPC = !isAndroid && !isIOS;
    
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
                
                {isIOS && (
                    <div>
                        <span className=""></span>
                        <button className='btn-Apple'> Logar usando Conta Apple </button>
                    </div>
                )}

                <div className='btn-loginGoogle'>
                    <LoginGoogle/>
                </div>
                <div>
                    <LoginGoogle2/>
                </div>
            </div>
        </div>
    )
}