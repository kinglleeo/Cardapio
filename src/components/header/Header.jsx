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
                        <div className='icone-horario'></div>
                        <div className='tempo-banner'>
                            Fecha as 23:00
                        </div>
                    </div>
                </div>
                <div className='footer-header'>
                    <div className='endereço-header'> Rua sjisjajsijsiadjiajsidjasd, shdaijsdoaokdsa - sajdpsa </div>
                </div>
                <div className='logo-restaurante'></div>
            </div>    
        </div>
    )
}