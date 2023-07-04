import React from 'react'
import Infos from './Infos'
import Historico from './Historico'
import Footer from '../../../Footer/Footer'
import BarraCarrinhoAtalho from '../../../Carrinho/BarraCarrinhoAtalho'
import EnderecosUsuario from './EnderecosUsuario'

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