import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../Style.css'

export default function Pasteis(){
        const [dataPasteis, setDataPasteis] = useState([]);

        useEffect(()=>{
            axios
                .get('')
                .then((getdata)=>{
                    setDataPasteis(getdata.data)
                })
        })

    return(
        
        <div className='caixa-lista' id='lista4'>
                    <label className='titulo-lista'>PASTÉIS</label>
                {dataPasteis.map((data)=>
                    <div className='caixa-items' key={data.id}>    
                        <div className='caixa-1'>
                            <div className='item-nome'>{data.NOMEPASTEIS }</div>
                            <div className='item-descricao'>{data.DESCRICAOPASTEIS}</div>
                        </div>
                        <div className='caixa-2'>
                            <div className='item-valor'>{data.VALORPASTEIS}</div>
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