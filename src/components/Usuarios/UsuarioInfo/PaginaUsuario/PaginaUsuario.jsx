import React from 'react'
import Infos from './Infos'
import Historico from './Historico'


export default function PaginaUsuario(){
    

    return(
        <div className=''>
            <div>
                <Infos/>
            </div>
            <div>
                <Historico/>
            </div>
        </div>
    )
}