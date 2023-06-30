import { React, useState, useEffect } from 'react'
import './info.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../LoginPage/Firebase/firebaseConfig';
import HeaderSimplificado from '../../../header/HeaderSimplificado';

export default function Infos(){
    const [user, setUser] = useState('');
    useEffect(()=>{
        const usuario = onAuthStateChanged(auth, (user)=>{
            setUser(user)
        })
    }, []);
    console.log(user)
    return(
        <div>
            <div>
                <HeaderSimplificado/>
            </div>
            <div className='infos'>
                <div className='usuarioInfos'>
                    <div className='iconeInfsoUser'></div>
                    <div className='itemInfos'> {user.displayName} </div>
                </div>
            </div>
        </div>
    )
}