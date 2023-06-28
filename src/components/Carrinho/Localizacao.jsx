import { React, useState, useEffect } from 'react'
import { api } from '../../conecções/api';
import '../../Styles/StylesCart.css'


export default function Localizacao(){
    const [localizacao, setLocalizacao] = useState([]);
    
    useEffect(()=>{
        api
            .get(`/listaMesas`)
            .then((getdata)=>{
                setLocalizacao(getdata.data);
            });
        
    }, [])

    return(
        <div className='cartTitulo'> 
          <div className='iconeLocalizacao'></div>
            <div className='carrinhoName'> Localização </div>
          <div className='cartListItems'>
            {localizacao.map((item)=>
                <div className='Card-mesa'>
                    <div className='mesaNome'> {item.MESA} </div>
                    <div className='mesaIcone'></div>
                </div>
            )}
        </div>
        </div>
    )
}