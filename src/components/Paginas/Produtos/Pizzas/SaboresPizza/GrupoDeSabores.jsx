import { React, useState, useEffect } from 'react';
import { api } from '../../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import '../../../../../Styles/StyleForAdicionais.css'
import { useQueryClient } from '@tanstack/react-query';
import ListaSaboresPizzas from './ListaSaboresPizzas'


export default function GruposAdicionais(){
    const { state } = useLocation();
    const { data } = state;
    const queryClient = useQueryClient();
  const [listaSaboresPizzas, setListaSaboresPizzas] = useState([]);
  const [listaSaboresPizzasAtiva, setListaSaboresPizzasAtiva] = useState(null);

  
    useEffect(()=>{
        api
            .get(`/listaSaboresPizza/${data.ID}`)
            .then((getdata)=>{
                const data = getdata.data.map((item)=>({
                    ...item,
                    quantidade: 0,
                    valorTotalProduto: 0
                }))
                    setListaSaboresPizzas(data);               
            });
    }, []);
  
    

return(
    <div>
        <div>
            <div> MINIMO {data.QTD_MININO}</div>
            <div> MAXIMO {data.QTD_MAXIMO}</div>
        </div>
        <ListaSaboresPizzas
            listaSaboresPizzas={listaSaboresPizzas}
        />
    </div>
)
}