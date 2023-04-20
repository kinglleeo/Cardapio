import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Escolhidos, TotalAdd } from './inputsAdcionais'
import './adicionaispizza.css'

export default function AddBar({ selectedAdds, setSelectedAdds }){
    const { state } = useLocation()
    const { item } = state
    console.log(selectedAdds)
    return(
        <div className='mainAddBarPizza'>
            <div className='items-1-addP'>
                <div>{item.nome}</div>
                <div>{item.sabores}</div>
            </div>
                <label className='titulo-add-P'>Adicionados</label>
            <div className='item-S-addP'>
                {selectedAdds.map((data2, index) =>
                    (<div key={index} className='item-caixa-S'>
                        <div>{data2.nome}</div>
                        <Escolhidos
                            selectedAdds={selectedAdds}
                            setSelectedAdds={setSelectedAdds}
                            index={index}
                        />
                    </div>)
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