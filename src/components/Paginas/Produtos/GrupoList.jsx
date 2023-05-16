import SubGrupoList from './SubGrupoList';
import '../../../Styles/Styles.css'
import { api } from '../../../conecções/api';
import MenuBar from '../../navbar/menubar';
import { lazy, useState, useEffect } from 'react'
const Footer = lazy(() => import('../../Footer/Footer'));

export default function Grupo(){
    const [grupos, setGrupos] = useState([]);

    useEffect(()=>{
        api
          .get('/listaGrupos')
          .then((getdata)=>{ 
            setGrupos(getdata.data);
          });
      }, []);

    return(
    <div>
        <div>
            <MenuBar
                grupos={grupos}
            />
        </div>
        {Array.isArray(grupos) ? grupos.map((item)=>
            <div className='GrupoList' id={item.ID_GRUPO} key={item.ID_GRUPO}>
                <div className='Grupo-Titulo'>{item.GRUPO}</div>
                    <div>
                        <SubGrupoList
                            ID_GRUPO={item.ID_GRUPO}
                        />
                    </div>
            </div>
        ) : null}    
        <div>
            <Footer/>
        </div>    
   </div>
)}