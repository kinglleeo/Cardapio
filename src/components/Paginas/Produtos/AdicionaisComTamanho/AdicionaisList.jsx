import { React, useState, useEffect } from 'react'
import { AddAdicionais } from './OperacoesAddTamanho';
import {api} from '../../../../conecções/api';
import '../../../Estilos/styleForList.css'

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
        <div className='lista'>
            <label className='titulo-lista'>ADICIONAIS</label>
        <div className='todos-items-lista'>
        {produto.map((data)=>
            <div className="carde">
                <div className="carde-inner">
                    <div className='box-item-List'>
                        <div className='item-List-info'>
                            <div className='bloco-item-info'>
                                <div className='box-name'>
                                    <div className='item-info-nome'>{data.nome}</div>
                                </div>
                                <div className='item-info-valor'>
                                    <div>Valor</div>
                                    <div>R$ {data.valor}</div>
                                </div>
                            </div> 
                                <div className='item-info-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{data.descricao}</div>
                        </div>
                        <div className='box-List-img'>
                            <div className='item-img'>
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
    </div>  
        
    )
}