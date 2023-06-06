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
    
    const handlePizzas=(data, tipo)=>{
        navigate('/Pizzas', { state: { data, tipo } });
    }

    return(
    <div>
        <div>
            <MenuBar
                grupos={grupos}
            />
        </div>
        {Array.isArray(grupos) ? (
            grupos.map((item)=>
            <div className='GrupoList' id={item.ID_GRUPO} key={item.ID_GRUPO}>
                <div className='Grupo-Titulo'>{item.GRUPO}</div>
                    {item.PIZZA_MISTA === "SIM" ? (
                        <div>
                            {tamanhosPizza.map((data)=>
                                <div className='card-produtos' key={data.ID}>
                                    <div className='box-produtos' onClick={()=> handlePizzas(data, item.PIZZA_MISTA)}>
                                        <div className='produtos-info'>
                                            <div className='item-nome'> {data.TAMANHO} </div>
                                        <div className='produtos-valor'>
                                            <div className='box-valor'>Até {data.QTD_MAXIMO === 1 ? (data.QTD_MAXIMO + " " + "Sabor"):(data.QTD_MAXIMO + " " + "Sabores")} </div>
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
                                grupoName={item.GRUPO}
                                tipo={item.PIZZA_MISTA}
                            />
                        </div>
                )}
            </div>
        )) : null} 
   </div>
)}