import React from 'react'
import './teste.css'

export default function teste(){

    return(
        <div className='add-bar-body'>
            <div className='cont-bar-body'>
                <div className='caixa-bar-body'>
                    <div className='caixa-bar-body-1'>
                        <div className='bar-add-t-name'>{item.nome}</div>
                        <div>
                            {selectedTamanho.map((data3, index)=>
                                <div key={index}>
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
                    <div className='caixa-bar-body-2'>
                        <div>
                            {selectedAdds.map((data2, index)=>
                                <div key={index}>
                                    <div>{data2.nome}</div>
                                    <Escolhidos
                                        selectedAdds={selectedAdds}
                                        setSelectedAdds={setSelectedAdds}
                                        index={index}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='caixa-bar-body-3'>
                        <div>
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