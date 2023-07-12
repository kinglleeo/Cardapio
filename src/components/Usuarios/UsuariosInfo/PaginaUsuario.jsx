import React from 'react'
import Footer from '../../Footer/Footer'
import BarraCarrinhoAtalho from '../../Carrinho/BarraCarrinhoAtalho'
import CorpoUsuario from './partesUser/CorpoUser'
import Endereços from './partesUser/Endereços'
import './paginauser.css'

export default function PaginaUsuario(){
    

    return(
        <div className='paginaUser'>
            <div className='principalUser'>
                <div>
                    <CorpoUsuario/>
                </div>
                <div>
                    <Endereços/>
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