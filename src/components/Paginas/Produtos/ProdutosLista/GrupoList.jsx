import { useState, useEffect } from 'react'
import '../../../../Styles/Styles.css'
import { api } from '../../../../conecções/api';
import MenuBar from '../../../navbar/menubar';
import SubGrupoList from './SubGrupoList';
import { useNavigate } from 'react-router-dom';

export default function Grupo(){
    const [grupos, setGrupos] = useState([]);
    const [tamanhosPizza, setTamanhosPizza] = useState([]);
    const navigate = useNavigate();
    const [listaTamanhosAtivos, setListaTamanhosAtivos] = useState(null);
    const [dados, setDados] = useState('');
    const tipoComanda = dados.tipoComanda
    const IdTamanho ="1"
    console.log(tipoComanda)

    useEffect(()=>{
        const dados = localStorage.getItem('dados')
            setDados(JSON.parse(dados))
    }, [])

    useEffect(() => {
        const dados = localStorage.getItem('dados')
            setDados(JSON.parse(dados))
        const tipoComanda = JSON.parse(dados)
        const comanda = tipoComanda.tipoComanda
            api
                .get(`http://192.168.0.100:9865/listaGrupos/${comanda}`)
                .then((getdata) => {
                    if (Array.isArray(getdata.data)) {
                    const sortedData = getdata.data.sort((a, b) => a.numeration - b.numeration);
                    setGrupos(sortedData);
                    }
            });
            api
                .get(`http://192.168.0.100:9865/listaTamanhosPizza`)
                    .then((getdata)=>{
                        setTamanhosPizza(getdata.data);
                    });
    }, []);

    
    const handlePizzas=(data, PIZZA_MISTA)=>{
        navigate('/Pizzas', { state: { data, PIZZA_MISTA } });
    }

    const toggleListaTamanhos = (IdGrupo) => {
        if (listaTamanhosAtivos === IdGrupo) {
            setListaTamanhosAtivos(null);
        } else {
            setListaTamanhosAtivos(IdGrupo);
        }
    } 

    return(
    <div>
        <div>
            <MenuBar
                grupos={grupos}
            />
        </div>
        <div className='Main-Cardapio'>
            {Array.isArray(grupos) ? (
                grupos.map((item)=>
                    <div className='GrupoList' id={item.ID_GRUPO} key={item.ID_GRUPO}>
                        <div className='Grupo-Titulo'>{item.GRUPO}
                            {item.PIZZA_MISTA === "SIM" ? (
                                <div className='icon-grupoTamanho' onClick={() => toggleListaTamanhos(IdTamanho)}>
                                    {listaTamanhosAtivos === IdTamanho ? <div className='icone-setaUp'></div> : <div className='icone-setaDown'></div>}
                                </div>
                            ) : null}
                        </div>
                            {item.PIZZA_MISTA === "SIM" ? (
                                <>
                                {listaTamanhosAtivos === "1" ? (
                                    <>
                                        {Array.isArray(tamanhosPizza) ? (
                                            tamanhosPizza.map((data)=>
                                            <div className='card-produtos' key={data.ID}>
                                                <div className='box-produtos' onClick={()=> handlePizzas(data, item.PIZZA_MISTA)}>
                                                    <div className='produtos-info'>
                                                        <div className='produto-nome'>
                                                            <div className='item-nome item-nomeTamanhoPizza'> {data.TAMANHO} </div>
                                                        </div>
                                                    <div className='ValorTamanhoPizza'>
                                                        <div >Até {data.QTD_MAXIMO === 1 ? (data.QTD_MAXIMO + " " + "Sabor"):(data.QTD_MAXIMO + " " + "Sabores")} </div>
                                                    </div>
                                                    </div>
                                                    <div className='pizza-img'>
                                                        <div className='pizza-png'></div>
                                                    </div>
                                                </div>
                                            </div>
                                            )    
                                        ) : null }
                                    </>
                                ) : null}
                            </>
                            ) : (
                                <div>
                                    <SubGrupoList
                                        grupo={item}
                                    />
                                </div>
                            )}
                    </div>
            )) : null} 
        </div>
        
   </div>
)}