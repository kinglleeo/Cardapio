import { React, useState, useEffect } from 'react'
import './info.css'
import { auth } from '../../../LoginPage/Firebase/firebaseConfig';
import HeaderSimplificado from '../../../../header/HeaderSimplificado';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import DadosUsuarios from './DadosUsuarios';

export default function Infos(){
    const navigate = useNavigate()
    const [user, setUser] = useState([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [photo, setphoto] = useState('');

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
        }
      });

    const deslogar =()=>{
        signOut(auth)
        .then(() => {
            navigate('/Main')
        })
        .catch((error) => {
        });
    }

    useEffect(()=>{
        if(user.displayName !== null){
            setNome(user.displayName)
        } else {
            setNome(null)
        }
        if(user.photoURL !== null){
            setphoto(user.photoURL)
        } else {
            setphoto(null);
        }
    })

    return(
        <div>
            <div>
                <HeaderSimplificado/>
            </div>
            <div>
                <DadosUsuarios
                    user={user}
                    nome={nome}
                    email={email}
                    telefone={telefone}
                    cpf={cpf}
                    dataNascimento={dataNascimento}
                    photo={photo}
                />
            </div>
        </div>
    )
}