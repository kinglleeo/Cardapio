import './Footer.css'
import { React, useState, useEffect } from 'react'
import axios from 'axios'

export default function Footer(){
    const [dados, setDados] = useState('')

    useEffect(()=>{
        axios  
            .get('')
            .then((getData) =>{
                setDados(getData.data)
            })
    })

    return(
        <div className='footer'>
            <div className='table-footer'>
                <div className='t-header-footer' >
                    <div><label>Texto</label>{dados.descricaoComercio}</div>
                </div>
                <div className='t-body-footer' >
                    <div><label>cnpj</label>{dados.cnpj}</div>
                    <div><label>endereço</label>{dados.endereço}</div>
                </div>
                
            </div>
        </div>
    )
}