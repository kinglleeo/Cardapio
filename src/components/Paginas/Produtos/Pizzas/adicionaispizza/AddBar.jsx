import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Escolhidos, TotalAdd } from './inputsAdcionais'
import './adicionaispizza.css'

export default function AddBar({ selectedAdds, setSelectedAdds }){
    const { state } = useLocation()
    const { item } = state

    return(
        <div className='mainAddBarPizza'>
            <div className='items-1-addP'>
                <div className='item-1-card'>
                    <div>
                        <div>{item.nome}</div>
                    </div>
                    <div className='item-card-sabores'>
                        <div className='item-card-sabores-name'>{item.sabores}</div>
                    </div>
                </div>
            </div>
                <label className='titulo-add-P'>Adicionados</label>
            <div className='item-S-addP'>
                {selectedAdds.map((data2, index) =>
                    <div className='item-caixa-S'>
                        <div key={index} className='item-caxai-s-interno'>
                            <div>{data2.nome}</div>
                            <Escolhidos
                                selectedAdds={selectedAdds}
                                setSelectedAdds={setSelectedAdds}
                                index={index}
                            />
                        </div>
                    </div>
                    )}
            </div>
            <div>
                <TotalAdd
                    data={item}
                    selectedAdds={selectedAdds}
                />
            </div>
        </div>
    )
}