import { React, useState, useEffect } from 'react'
import './info.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../LoginPage/Firebase/firebaseConfig';

export default function Infos(){
    const [user, setUser] = useState('');
    console.log(user)

    useEffect(()=>{
        const usuario = onAuthStateChanged(auth, (user)=>{
            setUser(user)
        })
    }, []);

    return(
        <div className='infos'>
        </div>
    )
}