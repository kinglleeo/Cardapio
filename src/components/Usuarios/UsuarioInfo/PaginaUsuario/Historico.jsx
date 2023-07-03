import { React, useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../LoginPage/Firebase/firebaseConfig';
import '../../../../Styles/StyleCarrinho.css'
import './historico.css'
import { formCurrency } from '../../../AA-utilidades/numeros';

import Modal from './modal';

export default function Historico(){
    const [historico, sethistorico] = useState([]);
    const [user, setUser] = useState('');
    const [listaHistorico, setListaHistorico] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [itemModal, setItemModal] = useState('')

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
      const month = date.getMonth() + 1; 
      const year = date.getFullYear();
  
      return `${day}/${month}/${year}`;
    };

    useEffect(() => {
      if (user) {
        const fetchHistorico = async () => {
          const querySnapshot = await getDocs(collection(db, "usuarios", user, "pedidos"));
          const historicoData = querySnapshot.docs.map((doc) => doc.data());
          sethistorico(historicoData);
        };
        fetchHistorico();
      }
    }, [user]);


    const toggleListaHistorico = (index) => {
      if (listaHistorico === index) {
        setListaHistorico(null);
      } else {
        setListaHistorico(index);
      }
  } 
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const chamarModal=(item)=>{
    setIsOpen(true)
    setItemModal(item)
  }

    return(
      <div>
        {Array.isArray(historico) ? (
          historico.map((item, index)=>
            <div className='listaHistorico'>
              <div className='tituloData' onClick={() => toggleListaHistorico(index)}> 
                <div className='tituloTexto'> {formatDate(item.date)} </div>
                  <div className='caixaIconeTitulo'>
                    {listaHistorico === index ? <div className='tituloSetaCima'></div> : <div className='tituloSetaBaixo'></div>}
                  </div>
              </div>
              <div>
                {listaHistorico === index ?(
                  <div>
                    {item.items.map((item)=> 
                      item.tipo === "NAO" ?(
                          <div>
                            <div className='cardHistorico' onClick={()=> chamarModal(item)}>
                              <div className='historicoNome'> {item.quantity} - {capitalizeFirstLetter(item.produto.PRODUTO.toLowerCase())} </div>
                              <div className='historicoValor'> {formCurrency.format(item.totalCompra)} </div>
                            </div>
                              {isOpen && <Modal item={itemModal} setIsOpen={setIsOpen}/>}
                          </div>
                      ) : item.tipo === "SIM" ? (
                        <div>
                          <div className='cardHistoricoPizza'  onClick={()=> chamarModal(item)}>
                            <div className='bixPizzahistorico'>
                              <div className='historicoNome'> {item.quantity} - Pizza {capitalizeFirstLetter(item.produto.TAMANHO.toLowerCase())} </div>
                              <div className='historicoValor'> {formCurrency.format(item.totalCompra)} </div>
                            </div>
                            <div className='historicoSabores'>
                              {item.SaboresSelecionados.map((sabores)=>
                                  <div className='historicoItemSabor'> {sabores.PRODUTO.toLowerCase()} / </div>
                              )}
                            </div>
                          </div>
                            {isOpen && <Modal item={itemModal} setIsOpen={setIsOpen} />}
                        </div>
                      ) : null
                    )}
                  </div>
                ) : null}
              </div>              
            </div>
          )
        ) : null }
      </div>
    )
}
