import { React, useState } from 'react'
import Header from '../../../header/Header'
import AdicionaisBar from './AdicionaisBar'
import AdicionaisList from './AdicionaisList'
import AdicionaisTamanho from './AdicionaisTamanho'
import Iconcarrinho from '../../../Carrinho/Iconcarrinho'
import Footer from '../../../Footer/Footer'
import TopoPagina from '../../../AA-utilidades/Topo'

export default function AdicionaisPorcoes(){
    const [selectedAdds, setSelectedAdds] = useState([]);
    const [selectedTamanho, setSelectedTamanho] = useState([])
    
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <AdicionaisBar
                    selectedAdds={selectedAdds}
                    setSelectedAdds={setSelectedAdds}
                    selectedTamanho={selectedTamanho}
                />
            </div>
            <div>
                <AdicionaisTamanho
                    selectedTamanho={selectedTamanho}
                    setSelectedTamanho={setSelectedTamanho}
                />
            </div>
            <div>
                <AdicionaisList
                    selectedAdds={selectedAdds}
                    setSelectedAdds={setSelectedAdds}
                />
            </div>
            <div>
                <Iconcarrinho/>
            </div>
            <div>
                <Footer/>
            </div>
            <div>
                <TopoPagina/>
            </div>
        </div>
    )
}