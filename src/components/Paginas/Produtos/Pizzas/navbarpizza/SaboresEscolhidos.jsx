import { React, useEffect, useState } from 'react'



export default function SaboresEscolhidos(){
    const [quantidadeSabores, setQuantidadeSabores] = useState(''); 
    
    useEffect(()=>{
        const quantidadeSabores = localStorage.getItem('quantidadeSabores');
            setQuantidadeSabores(quantidadeSabores) 
    },[])
    
   

    return(
        <div className='bar-caixa2'>
            <div className='caixa-sabor'>
            
            </div>
            <div className='caixa-q-sabor'>
                <div>{quantidadeSabores}</div>
            </div>
            
        </div>
    )
}