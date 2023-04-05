import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../Style.css'

export default function Bebidas(){
        const [dataBebidas, setDataBebidas] = useState([]);

        useEffect(()=>{
            axios
                .get('https://642b23b0d7081590f91d081a.mockapi.io/bebidas')
                .then((getdata)=>{
                    setDataBebidas(getdata.data)
                })
        })

    return(
        
        <div className='caixa-lista' id='lista3'>
                    <label className='titulo-lista'>BEBIDAS</label>
                {dataBebidas.map((data)=>
                    <div className='caixa-items' key={data.id}>
                        <div className='caixa-1'>
                            <div className='item-nome'>{data.NOMEBEBIDAS }</div>
                            <div className='item-descricao'>{data.DESCRICAOBEBIDAS}</div>
                        </div>
                        <div className='caixa-2'>
                            <div className='item-valor'>{data.VALORBEBIDAS}</div>
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