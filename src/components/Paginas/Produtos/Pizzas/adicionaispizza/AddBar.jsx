import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Escolhidos, TotalAdd } from './inputsAdcionais'


export default function AddBar({ selectedAdds, setSelectedAdds }){
    const { state } = useLocation()
    const { item } = state
    console.log(selectedAdds)
    return(
        <div>
            <div>
                <div>{item.nome}</div>
                <div>{item.sabores}</div>
                <div>{item.valor}</div>
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
                <TotalAdd
                    item={item}
                    selectedAdds={selectedAdds}
                />
            </div>
        </div>
    )
}