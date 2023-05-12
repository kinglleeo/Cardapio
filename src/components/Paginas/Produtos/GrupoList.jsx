import { React, lazy } from 'react';
import './GrupoList.css'
import './subGrupoList.css'
const SubGrupoList = lazy(() => import('./SubGrupoList'));

export default function Grupo({ grupos, setSubGrupoList }){

    return(
        <div>
        {Array.isArray(grupos) ? grupos.map((item)=>
            <div className='GrupoList' id={item.ID_GRUPO} key={item.ID_GRUPO}>
                <div className='Grupo-Titulo'>{item.GRUPO}</div>
                <div>
                    <SubGrupoList
                        ID_GRUPO={item.ID_GRUPO}
                        setSubGrupoList={setSubGrupoList}
                    />
                </div>
            </div>
        ) : null}        
   </div>
)
}