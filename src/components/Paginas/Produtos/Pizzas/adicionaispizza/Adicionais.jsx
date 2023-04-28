import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { AddAdicionais } from './inputsAdcionais';
import '../../Style.css'

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
        <div className='lista-items' id='salgadas'>
                    <label className='titulo-lista'>SALGADAS</label>
            {adicionais.map((data)=>  
                <div className="carde">
                    <div className="circle"></div>
                            <div className="carde-inner">
                                <div className='caixa-pro'>
                                    <div className='caixa-pro-1'> 
                                        <div className='item-f-nome'>{data.nome}</div>
                                        <div className='item-f-descricao'>{data.descricao}</div>
                                    </div>
                                    <div className='caixa-pro-2'>
                                        <AddAdicionais
                                            data={data}
                                            selectedAdds={selectedAdds}
                                            setSelectedAdds={setSelectedAdds}
                                        />
                                    <div className='item-f-btn'>
                                        
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