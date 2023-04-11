import { React, useEffect, useState } from 'react'


export default function SaboresEscolhidos(){
    const [quantidadeSabores, setQuantidadeSabores] = useState(''); 
    const [sabor, setSabor] = useState('')

    useEffect(()=>{
        const quantidadeSabores = localStorage.getItem('quantidadeSabores');
            setQuantidadeSabores(quantidadeSabores)
        const sabor = localStorage.getItem('sabor')
            setSabor(sabor)

    },[])

    console.log(sabor)
    return(
        <div className='bar-caixa2'>
            <div className='caixa-sabor'>
                <div><input type='checkbox'  />{sabor}</div>
                <div><input type='checkbox'/>{}</div>
            </div>
            <div className='caixa-q-sabor'>
                <div>{quantidadeSabores}</div>
            </div>
            <div className='caixa-sabor'>
                <div><input type='checkbox' />{}</div>
                <div><input type='checkbox'/>{}</div>
            </div>
        </div>
    )
}