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


      useEffect(() => {
        if(data.VALOR_MAIOR_MISTA === "NAO"){
          const totalItem = SaboresSelecionados.reduce((acc, item) => {
            const multipliedValue = new Decimal(item.VALOR_VENDA).times(item.quantidade);
            const dividedValue = multipliedValue.dividedBy(quantidadeTotal);
            return acc.plus(dividedValue);
          }, new Decimal(0));
            setValorTotalSabores(totalItem);
        } else if (data.VALOR_MAIOR_MISTA === "SIM"){
          const totalItem = SaboresSelecionados.reduce((acc, item) => {
            const multipliedValue = new Decimal(item.VALOR_VENDA).times(item.quantidade);
            return acc.plus(multipliedValue);
          }, new Decimal(0));
            setValorTotalSabores(totalItem);
        }
      }, [SaboresSelecionados, quantidadeTotal, data]);
        
        
      
return( 
    <div>
        <ListaSaboresPizzas
            listaSaboresPizzas={listaSaboresPizzas}
            setListaSaboresPizzas={setListaSaboresPizzas}
            Min={data.QTD_MINIMO}
            Max={data.QTD_MAXIMO}

            setSaboresSelecionados={setSaboresSelecionados}
            SaboresSelecionados={SaboresSelecionados}

            quantidadeTotal={quantidadeTotal}
            setQuantidadeTotal={setQuantidadeTotal}
        />
    </div>
)
}