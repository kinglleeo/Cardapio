import { React, useState, useEffect } from 'react'
import './Header.css'
import axios from 'axios'


export default function Header (){



    return(
        <div className='header-body'>
            <div className='header-caixa'>
                <div className='caixa-conteudo'>
                    <div className='header-cardapio'>
                        <div>Cardapio</div>
                    </div>
                        <div className='header-00'>
                            <div className='header-tempo'>Tempo de Espera: </div>
                            <div className='header-formas'>Formas de Pagamento: </div>
                        </div>
                </div>
            </div>
        </div>
    )
}