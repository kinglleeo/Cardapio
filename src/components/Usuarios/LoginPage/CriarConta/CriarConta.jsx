import { React, useState } from 'react'
import '../login.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

export default function CriarConta(){
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();

    const adicionarEmail=(event)=>{
        setEmail(event.target.value)
    }
    const adicionarSenha=((event)=>{
        setSenha(event.target.value)
    })
    const adicionarCpf=(event)=>{
        setCpf(event.target.value)
    }

    const Cadastrar=(e)=>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            try {
                const docRef = addDoc(collection(db, "usuario"), {
                  email: email,
                  cpf: cpf
                });
              } catch (e) {
                console.error("Error adding document: ", e);
              }
            navigate('/')
          })
          .catch((error) => {
            alert(error.message)
          })
    }
    
    return(
        <div>
            <div className="wrapper">
                <div className="logo">
                    <img src='https://image.pngaaa.com/419/263419-middle.png'></img>
                </div>
                    <div className="card-titulo"> Criar Conta </div>
                <div className="card-dados">
                    <div className="form-field d-flex align-items-center">
                        <input type="text" name="Email" id="email" placeholder="Email" onChange={adicionarEmail}/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <input type="password" name="senha" id="senha" placeholder="Senha / minimo 6 caracteres" onChange={adicionarSenha}/>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <input type='text' name='cpf' id='cpf' placeholder='Opcional/ CPF' onChange={adicionarCpf}/>
                    </div>
                        <button className="btn mt-3" onClick={Cadastrar}> Cadastrar </button>
                </div>
            </div>
        </div>
    )
}