import { React, useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../LoginPage/Firebase/firebaseConfig';
import '../../../../Styles/StyleCarrinho.css'
import './historico.css'
import { formCurrency } from '../../../AA-utilidades/numeros';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BarraCarrinhoAtalho from '../../../Carrinho/BarraCarrinhoAtalho'
import { addToCart } from '../../../../redux/cartSlice'
import { render } from 'react-dom';

export default function Historico(){
    const [historico, sethistorico] = useState([]);
    const [user, setUser] = useState('');
    const [listaHistorico, setListaHistorico] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(historico)

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

    const AddCart=(item)=>{
      dispatch(addToCart(item))
    }

    const toggleListaHistorico = () => {
      if (listaHistorico === "ativo") {
        setListaHistorico(null);
      } else {
        setListaHistorico("ativo");
      }
  } 
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const abrirHistoricoProduto=()=>{
    return(
      <div className="corpoFlutuante">
          
      </div>
  );
  }
  const abrirHistoricoPizza=()=>{
    
  }

    return(
      <div>
        {Array.isArray(historico) ? (
          historico.map((item)=>
            <div className='listaHistorico'>
              <div className='tituloData' onClick={toggleListaHistorico}> 
                <div className='tituloTexto'> {formatDate(item.date)} </div>
                  <div className='caixaIconeTitulo'>
                    {listaHistorico === "ativo" ? <div className='tituloSetaCima'></div> : <div className='tituloSetaBaixo'></div>}
                  </div>
              </div>
              <div>
                {listaHistorico === "ativo" ?(
                  <div>
                    {item.items.map((item)=> 
                      item.tipo === "NAO" ?(
                          <div className='cardHistorico' onClick={abrirHistoricoProduto}>
                            <div className='historicoNome'> {item.quantity} - {capitalizeFirstLetter(item.produto.PRODUTO.toLowerCase())} </div>
                            <div className='historicoValor'> {formCurrency.format(item.totalCompra)} </div>
                          </div>
                      ) : item.tipo === "SIM" ? (
                        <div className='cardHistoricoPizza' onClick={abrirHistoricoPizza}>
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
