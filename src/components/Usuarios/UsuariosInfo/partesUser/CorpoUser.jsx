import { React, useState, useEffect } from 'react'
import '../../../../Styles/StylePaginaUsuario.css'
import { auth } from '../../LoginPage/Firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import HeaderSimplificado from '../../../header/HeaderSimplificado';
import DadosUser from './DadosUser'
import Endereços from './Endereços'
import LoginGoogle from '../../LoginPage/LoginMetodos/LoginGoogle'
import NotificationPermissionButton from '../../../Carrinho/notificações/NotificationPermissionButton'

export default function Infos(){
    const [user, setUser] = useState([]);
    const [login, setLogin] = useState('');

    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            setUser(user)
        });
       const login = localStorage.getItem('login');
            setLogin(login);
    }, []);

    return(
        <div>
            <div>
                <HeaderSimplificado/>
            </div>
            {login === null ? (
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
            ) : null}
            <div>
                {user !== null ? (
                    <Endereços
                        user={user}
                    />
                ) : null}
            </div>
                {login === null ? (
                    <div>
                        <NotificationPermissionButton/>
                    </div>
                ) : null}
        </div>
    )
}