import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../../../header/Header'
import axios from 'axios';


export default function Adicionais (){
    const { state } = useLocation();
    const { tamanhopizza } = state;
    const { selectedItems } = state;
    const [adData, setAdData] = useState([]);
    console.log(tamanhopizza)
    console.log(selectedItems)
    console.log(adData)

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
            .then((getdata)=>{
                setAdData(getdata.data);
            });
    }, []);

   const valortotal =()=>{
    
   }

    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <div>
                    {tamanhopizza.tamanho} 
                </div> 
                <div>
                    {selectedItems.map((item, index)=>
                        <div key={index}>
                            <div>{item.nome}</div>
                            <div>{item.descricao}</div>
                        </div>
                    )}
                </div>
                <div>
                    {adData.map((ad)=>{
                        <div>
                            <div>{ad.nome}</div>
                            <div>{ad.descricao}</div>
                            <div>{ad.valor}</div>
                        </div>
                    })}
                </div>
                <div>
                    total {valortotal()}
                    <button >fazer pedido</button>
                </div>
            </div>
        </div>
    )
}