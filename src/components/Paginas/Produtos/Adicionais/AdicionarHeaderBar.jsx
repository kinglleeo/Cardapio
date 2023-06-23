import { React, useState, useEffect } from 'react'
import './AdicionarHeaderBar.css'


export default function AdicionarHeaderBar(){


    return(
        <div className='adicionarheaderbar'>
            <div className='voltar'>
                <button className='btn-voltar'></button>
            </div>
            <div className='logo-garline-header'>
                <div className='logo-garline'></div>
            </div>
        </div>
    )
}