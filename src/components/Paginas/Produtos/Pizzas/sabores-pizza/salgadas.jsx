import { React , useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'

export default function pizzaSalgada(){
    const [produto, setProduto] = useState([])
    const [selectedItems, setSelectedItems] = useState({})
    const { state } = useLocation()
    const { tamanhopizza } = state;

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    const handleAddSabor =(itempizza)=>{
        if (!selectedItems[itempizza.id] && Object.keys(selectedItems).length >= tamanhopizza.quantia){
           return; // limit reached, do not select more items
        }
        setSelectedItems(prevState => {
            const newState = {...prevState};
            if (selectedItems[itempizza.id]) {
                delete newState[itempizza.id]; // remove item from selection
            } else {
                newState[itempizza.id] = itempizza.nome; // add item to selection
            }
            return newState;
        });
    }

    const handleRemoveItem = (itemId) => {
        setSelectedItems(prevState => {
            const newState = {...prevState};
            delete newState[itemId]; // remove item from selection
            return newState;
        });
        const checkbox = document.querySelector(`input[name="selecionar-sabor"][value="${itemId}"]`);
        if (checkbox) checkbox.checked = false;
    }

    return(
        <div className='caixa-lista' id='pizza1'>
            <label className='titulo-lista'>Salgadas</label>
            {produto.map((itempizza)=>
                <div className='caixa-css' key={itempizza.id}>
                    <div className='caixa-items'>
                        <div className='caixa-1'>
                            <div className='item-nome'>{itempizza.nome}</div>
                            <div className='item-descricao'>{itempizza.descricao}</div>
                        </div>
                        <div className='caixa-2'>
                            <input type='checkbox' name='selecionar-sabor' value={itempizza.id} onClick={(()=> handleAddSabor(itempizza))}></input>
                            {selectedItems[itempizza.id] && (
                                <div>
                                <div className='item-nome'>{selectedItems[itempizza.id]}</div>
                                <button onClick={() => handleRemoveItem(itempizza.id)}>Remover</button>
                                </div>
                            )}
                        </div> 
                    </div> 
                </div>
            )}
        </div>
    )
}
