import { React, useState, useEffect } from 'react';
import { api } from '../../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import '../../../../../Styles/StyleForAdicionais.css'
import { useQueryClient } from '@tanstack/react-query';
import ListaSaboresPizzas from './ListaSaboresPizzas'
import Decimal from 'decimal.js';


export default function GruposAdicionais({ quantidadeTotal, setQuantidadeTotal, setValorTotalCustoPizza, setValorTotalSabores, setSaboresSelecionados, SaboresSelecionados }){
    const { state } = useLocation();
    const { data } = state;
    const queryClient = useQueryClient();
    const IdTamanho = data.ID;
    const [listaSaboresPizzas, setListaSaboresPizzas] = useState([]);

      useEffect(()=>{
        api
            .get(`/listaSaboresPizza/${IdTamanho}`)
            .then((getdata) => {
              const data = getdata.data.map((item) => ({
                ...item,
                quantidade: 0,
              }));
                setListaSaboresPizzas(data);
            });
      }, [])   

      useEffect(() => {
        let totalCusto = new Decimal(0);
        SaboresSelecionados.forEach(item => {
          if (item.DIVIDIR === "NAO") {
            totalCusto = totalCusto.plus(new Decimal(item.VALOR_CUSTO).times(item.quantidade));
          } else if (item.DIVIDIR === "SIM") {
            totalCusto = totalCusto.plus(new Decimal(item.VALOR_CUSTO).times(item.quantidade).dividedBy(quantidadeTotal));
          }
        });
        setValorTotalCustoPizza(totalCusto);
      }, [SaboresSelecionados, quantidadeTotal]);
      
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

            quantidadeTotal={quantidadeTotal}
            setQuantidadeTotal={setQuantidadeTotal}
        />
    </div>
)
}