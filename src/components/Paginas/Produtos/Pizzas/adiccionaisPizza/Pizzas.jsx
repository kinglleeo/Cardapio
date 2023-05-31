import { React, useState, useEffect } from 'react'
import { api } from '../../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import './pizzas.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';


export default function Pizzas(){
    const [saboresPizzas, setSaboresPizzas] = useState([]);
    const { state } = useLocation();
    const { itemPizza } = state;
    
    console.log(itemPizza)

    useEffect(()=>{
        api
            .get(`/listaSaboresPizza/${itemPizza.ID}`)
            .then((getdata)=>{
                setSaboresPizzas(getdata.data);
            });
    }, []);

    const handleCheckPizza = ( QTD_MAXIMO ) => {
        const checkboxValues = Array.from(document.querySelectorAll('input[name="input-pizza"]:checked')).map(
          (checkbox) => checkbox.value
        );
        if (checkboxValues.length >= QTD_MAXIMO) {
          document.querySelectorAll('input[name="input-pizza"]:not(:checked)').forEach((checkbox) => {
            checkbox.disabled = true;
          });
        } else {
          document.querySelectorAll('input[name="input-pizza"]').forEach((checkbox) => {
            checkbox.disabled = false;
          });
        }
    }

    return(
        <div>
            <div className='pizza-List-Top'>
                <div>Min {itemPizza.QTD_MININO}</div>
                <div>Max {itemPizza.QTD_MAXIMO}</div>
            </div>
            <div className='pizza-List-Main'>
                {saboresPizzas.map((item)=>
                    <div className='pizza-List'>
                        <div className='pizza-Card'>
                            <div className='pizza-card-interno'>
                                <div className='pizza-info'>
                                    <div className='pizza-nome'>
                                        <div className='pizza-nome-titulo'> Pizza Sabor </div>
                                            <div className='pizza-nome-sabor'> {item.PRODUTO} </div>
                                    </div>
                                    <div className='pizza-valor'>
                                        <div> Valor {formCurrency.format(item.VALOR_VENDA)} </div>
                                    </div>
                                </div>
                                <div className='pizza-input'>   
                                    <div>
                                        <input type='checkbox' name='input-pizza' onClick={() => handleCheckPizza(itemPizza.QTD_MAXIMO)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )


}