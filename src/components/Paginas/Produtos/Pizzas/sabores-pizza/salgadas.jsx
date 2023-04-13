import axios from 'axios'
import { React , useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function pizzaSalgada(){
    const [produto, setProduto] = useState([])
    const { state } = useLocation()
    const { tamanhopizza } = state;

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);
    
    const handleAddSabor =(itempizza)=>{
        const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar-sabor"]:checked')).map((checkbox) => checkbox.value);
        
        if (checkboxValues.length >= tamanhopizza.quantia){
           document.querySelectorAll('input[name="selecionar-sabor"]:not(:checked)').forEach((checkbox)=> {checkbox.disabled = true});
        }else{
            document.querySelectorAll('input[name="selecionar-sabor"]').forEach((checkbox)=>{checkbox.disabled = false});
        }
    
    
    }
    

    return(
        <div className='caixa-lista' id='pizza1'>
                <label className='titulo-lista'>Salgadas</label>
            {produto.map((itempizza)=>
                <div className='caixa-css'>
                    <div className='caixa-items' key={itempizza.id}>
                        <div className='caixa-1'>
                            <div className='item-nome'>{itempizza.nome}</div>
                            <div className='item-descricao'>{itempizza.descricao}</div>
                        </div>
                        <div className='caixa-2'>
                            <input type='checkbox' name='selecionar-sabor' onClick={(()=> handleAddSabor(itempizza))}></input>
                        </div> 
                    </div> 
                </div>
            )}
        </div>
    )
}