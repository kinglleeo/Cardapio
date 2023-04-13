import axios from 'axios'
import { React , useState, useEffect } from 'react'

export default function pizzaSalgada(){
    const [produto, setProduto] = useState([])
    

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    
    return(
        <div className='caixa-lista' id='pizza1'>
                <label className='titulo-lista'>Salgadas</label>
            {produto.map((item)=>
                <div className='caixa-css'>
                    <div className='caixa-items' key={item.id}>
                        <div className='caixa-1'>
                            <div className='item-nome'>{item.nome}</div>
                            <div className='item-descricao'>{item.descricao}</div>
                        </div>
                        <div className='caixa-2'>
                            <input type='checkbox' name='selecionar-sabor-pizza'></input>
                        </div> 
                    </div> 
                </div>
            )}
        </div>
    )
}