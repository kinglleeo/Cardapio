import { React, useState, useEffect } from 'react'
import './adicionaisbar.css'
import { useLocation } from 'react-router-dom'
import { Escolhidos, Escolhidos2, TotalAdd } from './OperacoesPorcoes'

export default function AdicionaisBar({ selectedAdds, setSelectedAdds, selectedTamanho, setSelectedTamanho }){
    const { state } = useLocation()
    const { item } = state

    return(
        <div className='add-bar-body'>
            <div>
                <div>
                    <div>{item.nome}</div>
                    <div>{item.descricao}</div>
                </div>
            </div>
            <div>
                {selectedAdds.map((data2, index) =>
                    (<div key={index}>
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
                {selectedTamanho.map((data3, index)=>
                    <div key={index}>
                        {data3.tamanho}
                        <Escolhidos2
                            selectedTamanho={selectedTamanho}
                            setSelectedTamanho={setSelectedTamanho}
                            index2={index}
                        />
                    </div>
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