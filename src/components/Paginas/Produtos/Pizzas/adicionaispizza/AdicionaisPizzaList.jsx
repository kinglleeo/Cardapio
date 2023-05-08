import { React, useState, lazy } from 'react'
import Header from '../../../../header/Header';
import AddBar from './AddBar';
import IconCarrinho from '../../../../Carrinho/Iconcarrinho';
import TopoPagina from '../../../../AA-utilidades/Topo';
import Adicionais from './Adicionais';

export default function AdicionaisPizzaList(){
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
                    selectedAdds={selectedAdds}
                    setSelectedAdds={setSelectedAdds}
                />
            </div>
            <div>
                <IconCarrinho/> 
            </div>
            <div>
                <TopoPagina/>
            </div>
        </div>
    )
}