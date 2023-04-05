import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import ListaProdutos from './Produtos/ListaProdutos'
import './Main.css'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'


export default function Main() {

  return (
    <div className='main-main'>
        <div className='main-header'>
            <Header/>
        </div>
        <div className='main-lista'>
            <ListaProdutos/>
        </div>
                <div className='carinho'>
                    <Link to='./Carrinho'>
                        <TiShoppingCart/>
                    </Link>
                </div>
         
    </div>
  );
}