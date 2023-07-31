import { React } from 'react'
import '../../../Styles/StylePaginaUsuario.css'
import Footer from '../../Footer/Footer'
import BarraCarrinhoAtalho from '../../Carrinho/BarraCarrinhoAtalho'
import CorpoUsuario from './partesUser/CorpoUser'

export default function PaginaUsuario(){
    return(
        <div className='paginaUser'>
            <div className='principalUser'>
                <div>
                    <CorpoUsuario/>
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