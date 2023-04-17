import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function Doces({ selectedItems, setSelectedItems}){
    const [produto, setProduto] = useState([]);
    const { state } = useLocation();
    const { tamanhopizza } = state;

    useEffect(()=>{
        axios
            .get('')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    const handlecheckbox = (event, itempizza) => {
  
        const maxquantia =  tamanhopizza.quantia
        console.log(maxquantia)
        const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar-sabor"]:checked')).map(
          (checkbox) => checkbox.value
        );
        if (checkboxValues.length >= maxquantia) {
          document.querySelectorAll('input[name="selecionar-sabor"]:not(:checked)').forEach((checkbox) => {
            checkbox.disabled = true;
          });
        } else {
          document.querySelectorAll('input[name="selecionar-sabor"]').forEach((checkbox) => {
            checkbox.disabled = false;
          });
        }
    
        if (event.target.checked) {
          setSelectedItems([...selectedItems, itempizza]);
        } else {
          setSelectedItems(selectedItems.filter((item) => item.id !== itempizza.id));
        }
      };

    return(
        <div className='caixa-lista' id='doces'>
            <label className='titulo-lista'>DOCES</label>
            {produto.map((itempizza)=>
                <div className='caixa-css' key={itempizza.id}>
                    <div className='caixa-items'>
                        <div className='caixa-1'>
                            <div className='item-nome'>{itempizza.nome}</div>
                            <div className='item-descricao'>{itempizza.descricao}</div>
                        </div>
                        <div className='caixa-2'>
                            <input
                                type='checkbox'
                                name='selecionar-sabor'
                                id={itempizza.id}
                                onChange={(event)=> handlecheckbox(event, itempizza)}
                                checked={selectedItems.some((item) => item.id === itempizza.id)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}