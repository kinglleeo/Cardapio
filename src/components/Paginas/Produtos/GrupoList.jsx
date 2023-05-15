import { React, lazy } from 'react';
const SubGrupoList = lazy(() => import('./SubGrupoList'));

import '../../../Styles/Styles.css'

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