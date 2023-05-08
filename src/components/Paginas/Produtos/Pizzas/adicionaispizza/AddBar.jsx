import { React, lazy} from 'react'
import { useLocation } from 'react-router-dom'
import { Escolhidos, TotalAdd } from './inputsAdcionais';
import './adicionaispizza.css'

export default function AddBar({ selectedAdds, setSelectedAdds }){
    const { state } = useLocation()
    const { item } = state

    return(
        <div className='AddBarPizza'>
            <div className='AddBarPizza-info'>
                <div className='card-info'>
                    <div>
                        <div>{item.nome}</div>
                    </div>
                    <div className='card-sabores-info'>
                        <div>{item.sabores}</div>
                    </div>
                </div>
            </div>
                <label className='titulo-adds-item'>Adicionados</label>
            <div className='addsBar-items'>
                {selectedAdds.map((data2, index) =>
                    <div className='item-box-adds'>
                        <div key={index} className='adds-items-box'>
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