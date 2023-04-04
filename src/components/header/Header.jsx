import { React, useState, useEffect } from 'react'
import './Header.css'
import axios from 'axios'


export default function Header (){
        const [dados, setDados] = useState([])

    useEffect(()=>{
        axios
            .get('')
            .then((getData)=>{
                setDados(getData.data)
            })
    })

    return(
        <div className='header'>
            <div className='container'>
                <div className='info-table'>
                    <div className='theader'>
                        <div><label>Tempo de Espera</label>{dados.tempoEspera}</div>
                        <div><label>Formas de Pagamento</label>{dados.formasPagamento}</div>
                    </div>
                    <div className='tbody'>
                        <label>CARDAPIO</label>
                    </div>
                </div>
            </div>
        </div>
    )
}