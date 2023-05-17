import '../../../Styles/Styles.css'
import { useState, useEffect } from 'react'
import { api } from '../../../conecções/api';
import MenuBar from '../../navbar/menubar';
import SubGrupoList from './SubGrupoList';

export default function Grupo(){
    const [grupos, setGrupos] = useState([]);
      
    useEffect(() => {
        api.get(`/listaGrupos`)
          .then((getdata) => {
            if (Array.isArray(getdata.data)) {
              const sortedData = getdata.data.sort((a, b) => a.numeration - b.numeration);
              setGrupos(sortedData);
            }
          });
    }, []);

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
                        <div>
                            <SubGrupoList
                                ID_GRUPO={item.ID_GRUPO}
                            />
                        </div>
                </div>
            )}       
   </div>
)}