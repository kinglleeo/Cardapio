import { React, useState, useEffect } from 'react'
import './Header.css'
import axios from 'axios'


export default function Header (){

    

    return(
        <div className='header'>
            <div className='container'>
                <div className='info-table'>
                    <div className='theader'>
                        <div><label>Tempo de Espera</label></div>
                        <div><label>Formas de Pagamento</label></div>
                    </div>
                    <div className='tbody'>
                        <label>CARDAPIO</label>
                    </div>
                </div>
            </div>
        </div>
    )
}