import { React, useState, useEffect } from 'react'
import './adicionaisbar.css'
import { useLocation } from 'react-router-dom'
import { Escolhidos, TotalAdd } from './OperacoesPorcoes'

export default function AdicionaisBar({ selectedAdds, setSelectedAdds, selectedTamanho, setSelectedTamanho  }){
    const { state } = useLocation()
    const { item } = state

    return(
        <div className='add-bar-body'>
            <div className='cont-bar-body'>
                <div className='caixa-bar-body'>
                    <div className='caixa-bar-body-1'>
                        <div className='bar-add-t-name'>{item.nome}</div>
                        <div>
                           {selectedTamanho.tamanho}
                        </div>
                    </div>
                    <div className='caixa-bar-body-2'>
                        <div className='bar-escolhidos-add'>
                            {selectedAdds.map((data2, index)=>
                                <div className='bar-escolhidos-add-00'>
                                <div key={index} className='bar-escolhidos-add-11'>
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
                    </div>
                    <div className='caixa-bar-body-3'>
                        <div className='caixa-add-total'>
                            <TotalAdd
                                data={item}
                                selectedAdds={selectedAdds}
                                selectedTamanho={selectedTamanho}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}