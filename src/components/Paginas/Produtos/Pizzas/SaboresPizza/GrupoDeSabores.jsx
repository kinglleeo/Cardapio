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
    const IdTamanho = data.ID;
    const [listaSaboresPizzas, setListaSaboresPizzas] = useState([]);
    const [listaSaboresPizzasAtiva, setListaSaboresPizzasAtiva] = useState(null);

        const AbrirListaSabores = (IdTamanho) => {
            if (listaSaboresPizzasAtiva === IdTamanho) {
                setListaSaboresPizzasAtiva(null);
            } else {
                setListaSaboresPizzasAtiva(IdTamanho);
                selecionarListaSabores(IdTamanho)
            }
        }  
        const selecionarListaSabores = (IdTamanho) => {
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
            };    
    

return(
    <div>
        <div>
            <div> MINIMO {data.QTD_MINIMO}</div>
            <div> MAXIMO {data.QTD_MAXIMO}</div>
            <div className='Adicionais-icon' onClick={() => AbrirListaSabores(IdTamanho)}>
                {listaSaboresPizzasAtiva === IdTamanho ? '-' : '+'}
            </div>
        </div>
        {listaSaboresPizzasAtiva === IdTamanho && (
            <ListaSaboresPizzas
                listaSaboresPizzas={listaSaboresPizzas}
                setListaSaboresPizzas={setListaSaboresPizzas}
            />
        )}
    </div>
)
}