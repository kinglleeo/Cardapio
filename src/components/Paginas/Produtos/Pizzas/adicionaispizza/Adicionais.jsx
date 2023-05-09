import { React, useState, useEffect } from 'react'
import { AddAdicionais } from './inputsAdcionais';
import { formCurrency } from '../../../../AA-utilidades/numeros';
import '../../../../Estilos/styleForList.css'
import { api } from '../../../../../conecções/api'

export default function Adicionais({ selectedAdds, setSelectedAdds }){
    const [adicionais, setAdicionais] = useState([]);

    useEffect(()=>{
        api
            .get('/lanches')
            .then((getdata) =>{
                setAdicionais(getdata.data);
            });
    }, []);


    return(
        <div className='lista'>
                    <label className='titulo-lista'>ADICIONAIS</label>
            <div className='todos-items-lista'>
            {adicionais.map((data)=>  
                <div className="carde">
                    <div className="carde-inner">
                        <div className='box-item-List'>
                        <span/>
                            <div className='item-List-info'>
                                <div className='bloco-item-info'>
                                    <div className='box-name'>
                                        <div className='item-info-name'>{data.nome}</div>
                                    </div>
                                    <div className='item-info-valor'>
                                        <div>Valor</div>
                                        <div>{formCurrency.format(data.valor)}</div>
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