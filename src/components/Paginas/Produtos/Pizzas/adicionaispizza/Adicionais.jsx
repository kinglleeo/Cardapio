import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { AddAdicionais } from './inputsAdcionais';
import '../../../../Estilos/Style.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';

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
        <div className='lista-items'>
                    <label className='titulo-lista'>ADICIONAIS</label>
            {adicionais.map((data)=>  
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
                                            <div>{formCurrency.format(data.valor)}</div>
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