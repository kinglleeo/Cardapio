import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { SelecionarAdd } from './inputsAdcionais';

export default function Adicionais({ selectedAdds, setSelectedAdds }){
    const [produto, setProduto] = useState([]);
    
    console.log(produto)

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    return(
        <div className='caixa-lista'>
            <label className='titulo-lista'>ADICIONAIS</label>
            {produto.map((data)=>(
            <div className='caixa-css' key={data.id}>
                <div className='caixa-items'>
                    <div className='caixa-1'>
                        <div className='item-nome'>{data.nome}</div>
                        <div className='item-descricao'>{data.descricao}</div>
                    </div>
                    <div className='caixa-2'>
                        <div className='item-valor'>{data.valor}</div>
                    </div>
                    <div className='caixa-3'>
                        <SelecionarAdd
                            data={data}
                            selectedAdds={selectedAdds}
                            setSelectedAdds={setSelectedAdds}
                        />
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}