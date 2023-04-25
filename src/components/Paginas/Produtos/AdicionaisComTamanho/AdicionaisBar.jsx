import { React, useState, useEffect } from 'react'
import './adicionaisbar.css'
import { useLocation } from 'react-router-dom'
import { Escolhidos, Escolhidos2, TotalAdd } from './OperacoesPorcoes'

export default function AdicionaisBar({ selectedAdds, setSelectedAdds, selectedTamanho, setSelectedTamanho }){
    const { state } = useLocation()
    const { item } = state

    return(
        <div className='add-bar-body'>
            <div className='item-005'>
                <div>{item.nome}</div>
                        <div>
                            {selectedTamanho.map((data3, index)=>
                                <div key={index} className='item-002'>
                                    <div>{data3.tamanho}</div>
                                    <Escolhidos2
                                        selectedTamanho={selectedTamanho}
                                        setSelectedTamanho={setSelectedTamanho}
                                        index2={index}
                                    />
                                </div>
                            )}
                    </div>
            </div>
            <div className='adds-1'>
                {selectedAdds.map((data2, index) =>
                    (<div key={index} className='items-1'>
                        {data2.nome}
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
                    selectedTamanho={selectedTamanho}
                />
            </div>       
        </div>
    )
}