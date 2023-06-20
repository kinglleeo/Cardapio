import { React } from 'react'
import './Header.css'
import UsuarioBar from '../Usuarios/UsuarioInfo/UsuarioBar'

export default function Header (){
    return(
        <div className='Main-header'>
            <div className='header-header'>
                <div className='logo-garline'></div>
            </div>
            <div className='body-header'>
                <div className='banner-garline'>
                    <div className='banner-infos'>
                        <div className='icone-tempo'> </div>
                        <div className='tempo-banner'>
                            10 - 20 minutos
                        </div>
                    </div>
                    <div className='banner-infos'>
                        <div className='icone-fechar'>
                            <img url='https://png.pngtree.com/png-vector/20220918/ourmid/pngtree-red-closed-sign-design-for-store-or-shope-png-image_6181316.png'></img>
                        </div>
                        <div className='tempo-banner'>
                            Fecha as 23:00
                        </div>
                    </div>
                </div>
                <div className='footer-header'>
                    <div className='endereço-header'> Rua sjisjajsijsiadjiajsidjasd, shdaijsdoaokdsa - sajdpsa </div>
                </div>
            </div>    
        </div>
    )
}