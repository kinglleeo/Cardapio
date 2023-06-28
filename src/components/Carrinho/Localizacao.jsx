import { React, useState, useEffect } from 'react'
import { api } from '../../conecções/api';
import '../../Styles/StylesCart.css'


export default function Localizacao({ tipo, setMesaSelecionada }){
    const [localizacao, setLocalizacao] = useState([]);
    const [selectedMesa, setSelectedMesa] = useState(null);
   
    useEffect(()=>{
        api
            .get(`/listaMesas`)
            .then((getdata)=>{
                setLocalizacao(getdata.data);
            });
        
    }, [])

    const selecionarMesa = (item, index) => {
        if (selectedMesa === index) {
          return;
        } else {
            setMesaSelecionada(item.MESA)
        }
        setSelectedMesa(index);
      };

    return(
        <div>
            {tipo !== "mesa" 
                ? (
                    <div>
                        <div className='cartTitulo'> 
                            <div className='iconeLocalizacao'></div>
                            <div className='carrinhoName'> Localização </div>
                        </div>
                        <div className='cartListItems'>
                            {localizacao.map((item, index)=>
                                <div className={`card-mesa ${selectedMesa === index ? 'mudarCorCardMesa' : ''}`} onClick={() => selecionarMesa(item, index)}>
                                    <div className='mesaNome'> {item.MESA} </div>
                                    <div className={`mesaIcone ${selectedMesa === index ? 'mudarIconeMesa' : ''}`} ></div>
                                </div>
                            )}
                        </div>
                    </div>
                )
                : null
            }
        </div>
    )
}