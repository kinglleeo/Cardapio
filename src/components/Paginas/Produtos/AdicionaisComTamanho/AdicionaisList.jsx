import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { AddAdicionais } from './OperacoesAddTamanho';
import {api} from '../../../../conecções/api'

export default function AdicionaisList({ selectedAdds, setSelectedAdds }){
    const [produto, setProduto] = useState([]);

    useEffect(()=>{
        api
            .get('/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);


    return(
        <div className='lista-items'>
        <label className='titulo-lista'>ADICIONAIS</label>
        {produto.map((data)=>
            <div className="carde">
                <div className="carde-inner">
                    <div className='caixa-pro'>
                        <div className='caixa-pro-1'>
                            <div className='bloco-caixa-pro-1'>
                                <div className='bloco-pro-name'>
                                    <div className='item-f-nome'>{data.nome}</div>
                                </div>
                                <div className='item-f-valor'>
                                    <div>Valor</div>
                                    <div>R$ {data.valor}</div>
                                </div>
                            </div> 
                            <div className='item-f-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{data.descricao}</div>
                        </div>
                        <div className='caixa-pro-2'>
                            <div className='item-f-img'>
                                <AddAdicionais
                                    data={data}
                                    selectedAdds={selectedAdds}
                                    setSelectedAdds={setSelectedAdds}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>  
        
    )
}