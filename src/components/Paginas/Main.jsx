import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import ListaProdutos from './Produtos/ListaProdutos'
import './Main.css'
import IconCarrinho from '../Carrinho/Iconcarrinho'
import TopoPagina from '../AA-utilidades/Topo';
import Promo from '../navbar/NavPromocoes/navPromo';
import SearchBar from '../navbar/Search/SearchBar';

export default function Main() {

  return ( 
    <div className='main-main'>
        <div className='main-header'>
          <Header/>
        </div>
        <div>
          <Promo/>
        </div>
        <div>
          <SearchBar/>
        </div>
        <div className='main-lista'>
          <ListaProdutos/>
        </div>
        <div>
          <IconCarrinho/>
        </div> 
        <div>
          <TopoPagina/>
        </div>
    </div>
  );
}