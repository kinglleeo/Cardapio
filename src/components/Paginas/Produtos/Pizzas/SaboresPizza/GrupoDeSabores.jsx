import { React, useState, useEffect } from 'react';
import { api } from '../../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import '../../../../../Styles/StyleForAdicionais.css'
import { useQueryClient } from '@tanstack/react-query';
import ListaSaboresPizzas from './ListaSaboresPizzas'


export default function GruposAdicionais({ setValorTotalSabores, setSaboresSelecionados, SaboresSelecionados }){
    const { state } = useLocation();
    const { data } = state;
    const queryClient = useQueryClient();
    const IdTamanho = data.ID;
    const [listaSaboresPizzas, setListaSaboresPizzas] = useState([]);


 
        useEffect(()=>{
            const cachedData = queryClient.getQueryData(['listaSaboresPizza', data]);
                if(cachedData){
                    setListaSaboresPizzas(cachedData)
                } else {
                    api
                        .get(`/listaSaboresPizza/${IdTamanho}`)
                        .then((getdata)=>{
                            const data = getdata.data.map((item)=>({
                                ...item,
                                quantidade: 0,
                            }))
                                setListaSaboresPizzas(data);
                                queryClient.setQueryData(['listaSaboresPizza'], data);
                        })
                    }
            }, []);    
    
return(
    <div>
        <ListaSaboresPizzas
            listaSaboresPizzas={listaSaboresPizzas}
            setListaSaboresPizzas={setListaSaboresPizzas}
            Min={data.QTD_MINIMO}
            Max={data.QTD_MAXIMO}

            setValorTotalSabores={setValorTotalSabores}
            setSaboresSelecionados={setSaboresSelecionados}
            SaboresSelecionados={SaboresSelecionados}
        />
    </div>
)
}