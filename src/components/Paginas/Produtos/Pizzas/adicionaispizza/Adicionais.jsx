import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { AddAdicionais } from './inputsAdcionais';



export default function Adicionais({ selectedAdds, setSelectedAdds }){
    const [adicionais, setAdicionais] = useState([]);

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata) =>{
                setAdicionais(getdata.data);
            });
    }, []);


    return(
        <div className='caixa-lista'>
            <label className='titulo-lista'>ADICIONAIS</label>
            {adicionais.map((data)=>
                <div className='caixa-css' key={data.id}>
                    <div className='caixa-items'>
                        <div className='caixa-1'>
                            <div className='item-nome'>{data.nome}</div>
                            <div className='item-descricao'>{data.descricao}</div>
                        </div>
                        <div className='caixa-2'>
                            <div className='item-valor'>{data.valor}</div>
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