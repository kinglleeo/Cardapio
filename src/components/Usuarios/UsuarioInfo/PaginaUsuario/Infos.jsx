import { React, useState, useEffect } from 'react'
import './info.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../LoginPage/Firebase/firebaseConfig';
import HeaderSimplificado from '../../../header/HeaderSimplificado';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";

export default function Infos(){
    const [user, setUser] = useState('');
    const navigate = useNavigate()

    
    useEffect(()=>{
        const usuario = onAuthStateChanged(auth, (user)=>{
            setUser(user)
        })
    }, []);

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
                    <div className='iconeInfsoUser'></div>
                    <div className='itemInfos'> {user.displayName !== null ?(user.displayName) : ('')} </div>
                    <div className='caixaiconeLogout'><div className='iconeLogout' onClick={()=> deslogar()}></div></div>
                </div>
            </div>
        </div>
    )
}