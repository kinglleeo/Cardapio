import { React, useState } from 'react';
import '../login.css'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebaseConfig';


export default function LoginEmailSenha(){
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const navigate = useNavigate();

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
                navigate('/Main')
            })
            .catch((error) => {
                alert('Usuario não encontrado');
            });
    }

    return(
        <div>
            <div className="card-dados">
                <div className="form-field d-flex align-items-center">
                    <input type="text" name="Email" id="email" placeholder="Email" onChange={Email}/>
                </div>
                <div className="form-field d-flex align-items-center">
                    <input type="password" name="senha" id="senha" placeholder="Senha" onChange={Senha}/>
                </div>
                    <button className="btn mt-3" onClick={logar}> LOGAR </button>
            </div>
        </div>
    )
}