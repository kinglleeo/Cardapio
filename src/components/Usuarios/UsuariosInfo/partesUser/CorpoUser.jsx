import { React, useState, useEffect } from 'react'
import { auth } from '../../LoginPage/Firebase/firebaseConfig';
import HeaderSimplificado from '../../../header/HeaderSimplificado';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import DadosUser from './DadosUser'
import Endereços from './Endereços'

export default function Infos(){
    const navigate = useNavigate()
    const [user, setUser] = useState([]);
    const [nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            setUser(user)
        });
    }, []);
   return(
        <div>
            <div>
                <HeaderSimplificado/>
            </div>
            <div>
                <DadosUser
                    user={user}
                    nome={nome}
                    Email={Email}
                />
            </div>
            <div>
                <Endereços
                    user={user}
                />
            </div>
        </div>
    )
}