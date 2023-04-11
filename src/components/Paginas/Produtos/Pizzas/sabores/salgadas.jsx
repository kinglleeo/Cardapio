import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../../Style.css'
import SelecionarSabor from './selecionarSabores'



export default function salgadas(){
    const [pizzasSalgadas, setPizzasSalgadas] = useState([]);
    const [saboresSelecionados, setSaboresSelecionados] = useState([]);
    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/bebidas')
            .then((getdata)=>{
                setPizzasSalgadas(getdata.data);
            });
    },[]);
    const handleSelecionarSabor = (sabor, selecionado) => {
        if (selecionado) {
          setSaboresSelecionados([...saboresSelecionados, sabor]);
        } else {
          setSaboresSelecionados(saboresSelecionados.filter((s) => s !== sabor));
        }
      }
      
    return(
        <div className='caixa-lista' id='salgadas'>
            <label className='titulo-lista'>SALGADAS</label>
            {pizzasSalgadas.map((data)=>
                <div className='caixa-css'>
                    <div className='caixa-items' key={data.id}>
                        <div className='caixa-1'>
                            <div className='item-nome'>{data.sabor}</div>
                            <div className='item-descricao'>{data.descricao}</div>
                        </div>
                        <div className='caixa-2'>
                            <div className='item-botao'>
                                <SelecionarSabor sabor={data.sabor} onSelecionarSabor={handleSelecionarSabor}/>
                            </div>
                        </div>
                        <div className='caixa-3'>
                            <div className='item-img'></div>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}