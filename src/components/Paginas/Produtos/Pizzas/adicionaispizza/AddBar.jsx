import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { RetirarAdd } from './inputsAdcionais'
import { TotalAdd } from './inputsAdcionais'

export default function AddBar({ selectedAdd, setSelectedAdd, selectedAdds, setSelectedAdds }){
    const { state } = useLocation()
    const { item } = state
    const navigate = useNavigate()

    return(
        <div>
            <div>
                <div>{item.nome}</div>
                <div>{item.descricao}</div>
                <div>{item.valor}</div>
            </div>
            <div>
                {selectedAdds.map((item, index) => (
                    <div key={index}>
                        {item.nome}
                    <RetirarAdd
                        selectedAdd={selectedAdd}
                        setSelectedAdd={setSelectedAdd}
                        selectedAdds={selectedAdds}
                        setSelectedAdds={setSelectedAdds}
                        index={index}
                    />
                    </div>
                ))}
            </div>
            <div>
            <TotalAdd 
                item={item}
                selectedAdd={selectedAdd}
                />  
            </div>
        </div>
    )
}