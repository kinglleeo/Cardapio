import { React, useState, useEffect } from 'react'
import './adicionaisbar.css'
import { useLocation } from 'react-router-dom'
import { Escolhidos, TotalAdd } from './OperacoesAddTamanho'

export default function AdicionaisBar({ selectedAdds, setSelectedAdds, selectedTamanho, setSelectedTamanho  }){
    const { state } = useLocation()
    const { item } = state

    return(
        <div className='add-bar'>
            <div className='add-bar-body'>
                <div className='box-bar-body'>
                    <div className='box-bar-info'>
                        <div className='bar-add-name'>{item.nome}</div>
                        <div className='bar-add-tamanho'>
                           {selectedTamanho.tamanho}
                        </div>
                    </div>
                    <div className='box-bar-adds'>
                        <div className='box-adds'>
                            {selectedAdds.map((data2, index)=>
                                <div className='adds'>
                                    <div key={index} className='bar-adds'>
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
                    <div className='box-adds-total'>
                        <div className='adds-total'>
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