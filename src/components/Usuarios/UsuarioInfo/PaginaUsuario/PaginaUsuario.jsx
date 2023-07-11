import React from 'react'
import Infos from './partes/Infos'
import Footer from '../../../Footer/Footer'
import BarraCarrinhoAtalho from '../../../Carrinho/BarraCarrinhoAtalho'
import EnderecosUsuario from './partes/EnderecosUsuario'
import './paginausuario.css'

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
                    <BarraCarrinhoAtalho/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}