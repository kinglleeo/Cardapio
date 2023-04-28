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
        <div className='lista-items'>
        <label className='titulo-lista'>ADICIONAIS</label>
        {produto.map((data)=>
            <div className="carde">
                <div className="circle"></div>
                <div className="carde-inner">
                    <div className='caixa-pro'>
                        <div className='caixa-pro-1'> 
                            <div className='item-f-nome'>{data.nome}</div>
                            <div className='item-f-descricao'>{data.descricao}</div>
                        </div>
                        <div className='caixa-pro-2'>
                            <div className='item-f-valor'>
                                <div>Valor</div>
                                <div>R$ {data.valor}</div>
                            </div>
                            <div className='item-f-btn'>
                                <AddAdicionais
                                    data={data}
                                    selectedAdds={selectedAdds}
                                    setSelectedAdds={setSelectedAdds}
                                />
                            </div>
                        </div>
                        <div className='caixa-pro-3'>
                            <div className='item-f-img'></div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>  
        
    )
}