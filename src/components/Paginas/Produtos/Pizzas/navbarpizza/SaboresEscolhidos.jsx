import { React, useEffect, useState } from 'react'



export default function SaboresEscolhidos(){
    const [quantidadeSabores, setQuantidadeSabores] = useState(''); 
    const [saboresSelecionados, setSaboresSelecionados] = useState([]);

    useEffect(()=>{
        const quantidadeSabores = localStorage.getItem('quantidadeSabores');
            setQuantidadeSabores(quantidadeSabores) 
    },[])
    
    useEffect(() => {
        const saboresSelecionados = JSON.parse(localStorage.getItem('saboresSelecionados')) || [];
        setSaboresSelecionados(saboresSelecionados);
      }, []);

    
   

    return(
        <div className='bar-caixa2'>
            <div className='caixa-sabor'>
            {saboresSelecionados.map((sabor) => (
                    <div>
                        <input type='checkbox' checked />
                        {sabor}
                    </div>
                    ))}
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