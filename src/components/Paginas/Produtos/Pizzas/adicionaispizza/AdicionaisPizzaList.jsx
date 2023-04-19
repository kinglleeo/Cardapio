import { React, useState } from 'react'
import Header from '../../../../header/Header'
import Adicionais from './Adicionais'
import AddBar from './AddBar'

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
        </div>
    )
}