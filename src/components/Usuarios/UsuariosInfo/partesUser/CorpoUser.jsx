import { React, useState, useEffect } from 'react'
import '../../../../Styles/StylePaginaUsuario.css'
import { auth } from '../../LoginPage/Firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import HeaderSimplificado from '../../../header/HeaderSimplificado';
import DadosUser from './DadosUser'
import Endereços from './Endereços'
import LoginGoogle from '../../LoginPage/LoginMetodos/LoginGoogle'

export default function Infos(){
    const [user, setUser] = useState([]);

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
                {user !== null ? (
                    <DadosUser
                        user={user}
                    />
                ) : (
                    <div className='marginLogin'>
                        <LoginGoogle/>
                    </div>
                )}
            </div>
            <div>
                {user !== null ? (
                    <Endereços
                        user={user}
                    />
                ) : null}
            </div>
        </div>
    )
}