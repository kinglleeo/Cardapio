const valorTotal = () => {
    const tamanhopizzaValor = tamanhopizza.valor || 0;
    const selectedItemsValor = selectedItems.reduce((total, item) => {
      return total.plus(item.valor || 0);
    }, new Decimal(0));
    const total = new Decimal(tamanhopizzaValor).plus(selectedItemsValor);
    return total.toFixed(2);
  };



  import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { SelecionarAdd } from './inputsAdcionais';

export default function Adicionais({ selectedAdds, setSelectedAdds }){
    const [produto, setProduto] = useState([]);
    
    console.log(produto)

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    return(
        <div className='caixa-lista'>
            <label className='titulo-lista'>ADICIONAIS</label>
            {produto.map((data)=>(
            <div className='caixa-css' key={data.id}>
                <div className='caixa-items'>
                    <div className='caixa-1'>
                        <div className='item-nome'>{data.nome}</div>
                        <div className='item-descricao'>{data.descricao}</div>
                    </div>
                    <div className='caixa-2'>
                        <div className='item-valor'>{data.valor}</div>
                    </div>
                    <div className='caixa-3'>
                        <SelecionarAdd
                            data={data}
                            selectedAdds={selectedAdds}
                            setSelectedAdds={setSelectedAdds}
                        />
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}


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

import { React, useState, useEffect } from 'react'
import Header from '../../../../header/Header'
import Adicionais from './Adicionais'
import AddBar from './AddBar'

export default function AdicionaisList(){
    const [selectedAdds, setSelectedAdds] = useState([]);

    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <AddBar
                    selectedAdds={selectedAdds}
                    setSelectedAdds={setSelectedAdds}
                />
            </div>
            <div>
                <Adicionais
                    selectedAdds={setSelectedAdds}
                    setSelectedAdds={setSelectedAdds}
                />
            </div>
        </div>
    )
}