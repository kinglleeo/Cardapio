import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import './Main.css'
import { GiHamburger, GiFullPizza, GiWineBottle, GiFrenchFries } from 'react-icons/gi'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'

export default function Main() {
  const [apidata, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
      .then((getdata) => {
        setData(getdata.data);
      });
  }, []);

  //fixar barra de navegação
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });

  
  const data = apidata
  return (
    <div className='main-main'>
        <div>
            <Header/>
        </div>
        <div>
                <div className='navbar'>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista1').scrollIntoView({ behavior: 'smooth' })}>
                        <GiHamburger/>
                        <label>Lanches</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista2').scrollIntoView({ behavior: 'smooth' })}>
                        <GiFullPizza/>
                        <label>Pizzas</label>
                    </div>
                    <div className='itembarraDeDirecionamento'>
                        <GiWineBottle/>
                        <label>Bebidas</label>
                    </div>
                    <div className='itembarraDeDirecionamento'>
                        <label>Pasteis</label>
                    </div>
                    <div className='itembarraDeDirecionamento'>
                        <GiFrenchFries/>
                        <label>Porções</label>
                    </div>                
                </div>
            </div>
                <div className='tabela-main'>
                    <div className='bloco-listas' id='lista1'>
                            <label>LISTA 1</label>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                                <div className='item-botao'><button className='botao-adicionar'> adicionar </button></div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items' id='lista2'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                    </div>
                    <div className='bloco-listas'>
                        <label>LISTA 2</label>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                    </div>
                    <div className='bloco-listas'>
                        <label>LISTA 3</label>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                    </div>
                </div>
                <div className='carinho'>
                    <Link to='./Carrinho'>
                        <TiShoppingCart/>
                    </Link>
                </div>
         <div>
            <Footer/>
         </div>
    </div>
  );
}
