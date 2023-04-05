import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../Style.css'

export default function Pasteis(){
        const [dataPorcoes, setDataPorcoes] = useState([]);

        useEffect(()=>{
            axios
                .get('')
                .then((getdata)=>{
                    setDataPorcoes(getdata.data)
                })
        })

    return(
        
        <div className='caixa-lista' id='lista5'>
                    <label className='titulo-lista'>PORCOES</label>
                {dataPorcoes.map((data)=>
                    <div className='caixa-items' key={data.id}>
                        <div className='caixa-1'>
                            <div className='item-nome'>{data.NOMEPORCOES }</div>
                            <div className='item-descricao'>{data.DESCRICAOPORCOES}</div>
                        </div>
                        <div className='caixa-2'>
                            <div className='item-valor'>{data.VALORPORCOES}</div>
                            <div className='item-botao'><button className='botao-adicionar'> adicionar </button></div>
                        </div>
                        <div className='caixa-3'>
                            <div className='item-img'></div>
                        </div>
                    </div>
                 )}
                
        </div> 
         
    )
}