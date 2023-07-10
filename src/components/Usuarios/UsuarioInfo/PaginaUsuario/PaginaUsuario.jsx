import React from 'react'
import Infos from './partes/Infos'
import Historico from './partes/Historico'
import Footer from '../../../Footer/Footer'
import BarraCarrinhoAtalho from '../../../Carrinho/BarraCarrinhoAtalho'
import EnderecosUsuario from './partes/EnderecosUsuario'

export default function PaginaUsuario(){
    

    return(
        <div className='paginaUser'>
            <div className='principalUser'>
                <div>
                    <Infos/>
                </div>
                <div>
                    <EnderecosUsuario/>
                </div>
                <div>
                    <Historico/>
                </div>
                <div>
                    <BarraCarrinhoAtalho/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}