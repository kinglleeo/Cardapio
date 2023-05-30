import { React, useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../LoginPage/Firebase/firebaseConfig';

export default function Historico(){
    const [historico, sethistorico] = useState([]);
    const [user, setUser] = useState('');
    console.log(user)
    useEffect(()=>{
        const usuario = onAuthStateChanged(auth, (user)=>{
            setUser(user.uid)
        })
    }, []);

    useEffect(() => {
        if (user) {
          const fetchHistorico = async () => {
            const querySnapshot = await getDocs(collection(db, "usuario", user, "pedidos"));
            const historicoData = querySnapshot.docs.map((doc) => doc.data());
            sethistorico(historicoData);
          };
          fetchHistorico();
        }
      }, [user]);

    return(
        <div>
           
        </div>
    )
}
