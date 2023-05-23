import { React, useState, useEffect } from 'react';
import { api } from '../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import '../../../../Styles/StyleForAdicionais.css'
import { useQueryClient } from '@tanstack/react-query';

export default function GruposAdicionais({ setTotalValue }) {
    const [gruposPizzas, setGruposPizzas] = useState([]);
    const [saboresPizzas, setSaboresPizzas] = useState([]);
    const [listaAtiva, setListaAtiva] = useState(null);
    const queryClient = useQueryClient();
    const { state } = useLocation();
    const { data } = state;

    useEffect(()=>{
        api
            .get(``)
            .then((getdata) =>{
                setGruposPizzas(getdata.data);
            });
    }, []);
    
    const toggleListaSabores = (idpizzas) => {
        if (listaAtiva === idpizzas) {
            setListaAtiva(null);
        } else {
            setListaAtiva(idpizzas);
            selecionarListaSabores();
        }
    }   

    const selecionarListaSabores=()=>{
        const cachedData = queryClient.getQueryData([]);
        if(cachedData){
            setListaOpcionais(cachedData)
        } else {
            api
                .get()
                .then((getdata)=>{
                    const data = getdata.data.map((item)=>({
                        ...item,
                        quantidade: 0
                    }))
                        setSaboresPizzas(data);
                        queryClient.setQueryData([], data);
                })
        }
    }

return(
    <div>
        {Array.isArray(gruposPizzas) ? (
            gruposPizzas.map((item) => 
                <div key={item.idpizzas}>
                    <div className='box-Adicionais'>
                        <div className='Adicionais'>
                            <div className='box-adicionais-descricao'>
                                <div className='Adicionais-titulo'> {item.DESCRICAO} </div>
                                    <div className='adicionais-quantidadeMax'> 
                                        <div>Até {item.MAXIMO} itens</div>
                                    </div>
                            </div>
                            <div className='Adicionais-icon' onClick={() => toggleListaSabores(item.idpizzas)}>
                                {listaAtiva === item.idpizzas ? '-' : '+'}
                            </div>
                        </div>
                    </div>
                    <div>
                        {listaAtiva === idpizzas &&(
                            <ListaSabores
                                saboresPizzas={saboresPizzas}
                                setSaboresPizzas={setSaboresPizzas}
                            />
                        )}
                    </div>
                </div>
        )) : null}
    </div>
)
}