import { React, useState, useEffect } from 'react'
import './terminal.css'
import HeaderSimplificado from '../../header/HeaderSimplificado'
import CorpoTerminal from './partes/CorpoTerminal'
import Footer from '../../Footer/Footer'

export default function Terminal(){


    return(
        <div className='MainTerminal'>
            <div className='CorpoTerminal'>
                <div>
                    <HeaderSimplificado/>
                </div>
                <div>
                    <CorpoTerminal/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}