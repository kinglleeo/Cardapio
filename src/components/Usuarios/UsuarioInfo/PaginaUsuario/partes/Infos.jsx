import { React, useState, useEffect } from 'react'
import './info.css'
import { auth } from '../../../LoginPage/Firebase/firebaseConfig';
import HeaderSimplificado from '../../../../header/HeaderSimplificado';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";

export default function Infos(){
    const user = auth.currentUser;
    const navigate = useNavigate()
    
    const deslogar =()=>{
        signOut(auth)
        .then(() => {
            navigate('/Main')
        })
        .catch((error) => {
        });
          
    }
    return(
        <div>
            <div>
                <HeaderSimplificado/>
            </div>
            <div className='infos'>
                <div className='usuarioInfos'>
                    {user.photoURL !== null ? (
                        <img src={user.photoURL} className='fotoPerfil'/>
                    ) : null}
                    <div className='caixaiconeLogout'><div className='iconeLogout' onClick={()=> deslogar()}></div></div>
                    <div className='itemInfos'> {user.displayName !== null ?(user.displayName) : ('')} </div>
                </div>
                <div className='listaInfos'>
                    <div className='infoEmail'> {user.email} </div>
                    <div className='infoEmail'> {user.phoneNumber} </div>
                </div>
            </div>
        </div>
    )
}