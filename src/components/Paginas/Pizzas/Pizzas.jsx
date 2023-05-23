import { React } from 'react'
import PizzasInfo from './PizzasInfo'
import ListaGruposPizzas from './ListaGruposPizzas'

export default function Pizza(){
    const [totalValue, setTotalValue] = useState(0);

    return(
        <div>
            <div>
                <PizzasInfo
                    totalValue={totalValue}
                />        
            </div>
            <div>
                <ListaGruposPizzas
                    setTotalValue={setTotalValue}
                />
            </div>
        </div>
    )
}