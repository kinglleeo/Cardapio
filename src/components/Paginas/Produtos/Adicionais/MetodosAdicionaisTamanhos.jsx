import { React, useState, useEffect } from 'react'

export function SelecionarTamanho({ item, setTamanhoEscolhido }){

    const RadioTamanhos =( item )=>{
        setTamanhoEscolhido(item)
    }

    return(
        <div>
        <label className='container'>
            <input
                type='radio'
                onChange={()=> RadioTamanhos (item)}
                name='tamanhos'
            /> 
            <div className='checkmark'></div>
        </label>            
    </div>
    )
}