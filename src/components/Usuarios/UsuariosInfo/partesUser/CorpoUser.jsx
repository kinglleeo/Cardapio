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
    

    auth.onAuthStateChanged((user) => {
        if (user) {
            setUser(user)
        } else {
            alert('Usuario nao encontrado')
        }
    });
   

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