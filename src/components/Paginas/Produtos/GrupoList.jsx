import '../../../Styles/Styles.css'
import { useState, useEffect } from 'react'
import { api } from '../../../conecções/api';
import MenuBar from '../../navbar/menubar';
import SubGrupoList from './SubGrupoList';
import { useNavigate } from 'react-router-dom';

export default function Grupo(){
    const [grupos, setGrupos] = useState([]);
    const [tamanhosPizza, setTamanhosPizza] = useState([]);
    const navigate = useNavigate();
    console.log(tamanhosPizza)
    useEffect(() => {
        api
            .get(`/listaGrupos`)
            .then((getdata) => {
            if (Array.isArray(getdata.data)) {
              const sortedData = getdata.data.sort((a, b) => a.numeration - b.numeration);
              setGrupos(sortedData);
            }
          });
    }, []);
    useEffect(()=>{
        api
            .get('/listaTamanhosPizza')
            .then((getdata)=>{
                setTamanhosPizza(getdata.data);
            });
    }, []);
    
    const handlePizzas=(itemPizza)=>{
        navigate('/Pizzas', { state: { itemPizza } });
    }

    return(
    <div>
        <div>
            <MenuBar
                grupos={grupos}
            />
        </div>
        {grupos.map((item)=>
            <div className='GrupoList' id={item.ID_GRUPO} key={item.ID_GRUPO}>
                <div className='Grupo-Titulo'>{item.GRUPO}</div>
                    {item.PIZZA_MISTA === "SIM" ? (
                        <div>
                            {tamanhosPizza.map((itemPizza)=>
                                <div className='card-produtos' key={itemPizza.ID}>
                                    <div className='box-produtos' onClick={()=> handlePizzas(itemPizza)}>
                                        <div className='produtos-info'>
                                            <div className='item-nome'> {itemPizza.TAMANHO} </div>
                                        <div className='produtos-valor'>
                                            <div className='box-valor'>Até {itemPizza.QTD_MAXIMO === 1 ? (itemPizza.QTD_MAXIMO + " " + "Sabor"):(itemPizza.QTD_MAXIMO + " " + "Sabores")} </div>
                                        </div>
                                        </div>
                                        <div className='produtos-img'>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <SubGrupoList
                                ID_GRUPO={item.ID_GRUPO}
                            />
                        </div>
                )}
            </div>
        )}  
   </div>
)}