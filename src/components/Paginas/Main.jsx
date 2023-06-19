import Header from '../header/Header';
import GrupoList from './Produtos/GrupoList';
import IconeCarrinho from '../Carrinho/Iconcarrinho'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Usuarios/LoginPage/Firebase/firebaseConfig';
import { useEffect, useState } from 'react';

export default function Main() {
  const [user, setUser] = useState('');

  
  useEffect(()=>{
    const usuario = onAuthStateChanged(auth, (user)=>{
        setUser(user)
    })
  }, []);
  
  return ( 
    <div>
        <div>
          <Header/>
        </div>
        <div>
          <GrupoList/>
        </div>
        <div>
          <IconeCarrinho/>
        </div>
    </div>
  );
}