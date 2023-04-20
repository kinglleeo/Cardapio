import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { AddAdicionais } from './OperacoesPorcoes';

export default function AdicionaisList({ selectedAdds, setSelectedAdds }){
    const [produto, setProduto] = useState([]);

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);


    return(
        <div className='caixa-lista' id='lanches'>
                    <label className='titulo-lista'>LANCHES</label>
                {produto.map((data)=>
                    <div className='caixa-css'>
                        <div className='caixa-items' key={data.id}>
                            <div className='caixa-1'>
                                <div className='item-nome'>{data.nome}</div>
                                <div className='item-descricao'>{data.descricao}</div>
                            </div>
                            <div className='caixa-2'>
                                <div className='item-valor'><label>Preço</label>R${data.valor}</div>
                                <div>
                                </div>       
                            </div>
                            <div className='caixa-3'>
                                <div className='item-img'></div>
                            </div>
                            <div>
                                <AddAdicionais
                                    data={data}
                                    selectedAdds={selectedAdds}
                                    setSelectedAdds={setSelectedAdds}
                                />
                            </div>
                        </div>
                    </div>
                 )}
        </div>   
        
    )
}