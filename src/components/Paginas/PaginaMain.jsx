import Header from '../header/Header';
import GrupoList from './Produtos/GrupoList';
import BarraCarrinhoAtalho from '../Carrinho/BarraCarrinhoAtalho'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Usuarios/LoginPage/Firebase/firebaseConfig';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer'
import '../../Styles/Styles.css'

export default function Main() {
  const [user, setUser] = useState('');

  
  useEffect(()=>{
    const usuario = onAuthStateChanged(auth, (user)=>{
        setUser(user)
    })
  }, []);
  
  return ( 
    <div >
      <div className='Main'>
        <div>
          <Header/>
        </div>
        <div className='lista-Main-Page'>
          <GrupoList/>
        </div>
        <div>
          <BarraCarrinhoAtalho/>
        </div>
      </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}