import { React, useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../LoginPage/Firebase/firebaseConfig';
import '../../../../Styles/StylesCart.css'
import './historico.css'

export default function Historico(){
    const [historico, sethistorico] = useState([]);
    const [user, setUser] = useState('');

    useEffect(()=>{
        const usuario = onAuthStateChanged(auth, (user)=>{
            setUser(user.uid)
        })
    }, []);
    
    const formatDate = (dateObj) => {
      const seconds = dateObj.seconds;
      const milliseconds = seconds * 1000;
      const date = new Date(milliseconds);
  
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-based
      const year = date.getFullYear();
  
      return `${day}/${month}/${year}`;
    };

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
        <div className='lista-historico'>
          {historico.map((item)=>
            <div className='historicoItem-box'>
              <div className='historico-date'> Dia {formatDate(item.date)} </div>
              <div>
                {item.items.map((item)=>
                   <div className='carde carde-cart' key={item.idCart}>
                   <div className='carde-inner '>
                       <div className='cart-box'>
                           <div className='cart-item2'>
                               <div className='box-item-cart'>
                                   <div className='cart-box-item-1'>
                                       <div className='cart-box-item-name'>
                                           <div>{item.nome}</div>
                                       </div>
                                       <div className='cart-box-item-descricao'>
                                           <div className='cart-item-titulo-descricao'>{item.descricao === "" ? (<div></div>) : (<div> Descrição </div>)}</div>
                                           <div className='cart-item-descricao'>{item.descricao}</div>
                                       </div>
                                   </div >
                               </div>
                           </div>
                       </div>
                       <div className='cart-box-observacoes'>
                           <div className='cartbox-observacoes-text'> Observações </div>
                           <div className='cartbox-observacoes-box'><div>{item.Observacao}</div></div>
                       </div>
                   </div>
               </div>
                )}
              </div>
            </div>
          )}
           
        </div>
    )
}
