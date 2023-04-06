import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../../Style.css'

export default function doces(){
    const [pizzasDoces, setPizzasDoces] = useState([])

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/bebidas')
            .then((getdata)=>{
                setPizzasDoces(getdata.data)
            })
    })

    
        

    return(
        <div className='caixa-lista' id='doces'>
            <label className='titulo-lista'>DOCES</label>
            {pizzasDoces.map((data)=>
                <div className='caixa-css'>
                    <div className='caixa-items' key={data.id}>
                        <div className='caixa-1'>
                            <div className='item-nome'>{data.sabor}</div>
                            <div className='item-descricao'>{data.descricao}</div>
                        </div>
                        <div className='caixa-2'>
                            <div className='item-valor'><label>Preço</label>R${data.valor}</div>
                            <div className='item-botao'><button className='botao-adicionar'> adicionar</button></div>
                        </div>
                        <div className='caixa-3'>
                            <div className='item-img'></div>
                        </div>
                    </div>    
                </div>    
            )}
        </div>
    )
}