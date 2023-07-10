import React from 'react'
import './Footer.css'
export default function Footer(){


    return(
        <div className='footer' id='footer'>
            <div className='footerBlocoTexto'>
                <div className='text-footer'> Garline </div>
                <div className='text-footer'> BeD Info Services </div>
                <div className='text-footer'> Rua Prefeito Arnaldo Facini, 499, Santo Antonio do Sudoeste - PR</div>
                    <a className='text-footer' style={{ color: 'inherit', textDecoration: 'inherit'}} href='http://bedinfoservices.com.br'> www.bedinfoservices.com.br </a>
                <div className='text-footer'> (46) 3563-1500 </div>
            </div>
        </div>
    )
}