import { React, useState, useEffect } from 'react'
import './endereco.css'


export default function Endereços (){



    return(
        <div className='endereços'>
            <div className='tituloEnderecos'> Endereços </div>
            <div className='endereco'>
                <div className='descricaoendereco'>
                    <div className='enderecoApelido'> 
                        <div> Casa </div>
                    </div>
                    <div className='caixaEndereco'>
                        <div className='enderecoRua'>
                            <div className=''> Rua </div>
                            <div> Republica Argentina </div>
                        </div>
                        <div className='enderecoNumero'> 
                            <div> N° </div>
                            <div> 1077 </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div> Bairro </div>
                            <div> Princesa Isabel </div>
                        </div>
                        <div>
                            <div> Cidade </div>
                            <div> Santo Antonio do Sudoeste </div>
                        </div>
                        <div>
                            <div> Estado </div>
                            <div> Paraná </div>
                        </div>
                    </div>
                </div>
                <div className='btneditarendereco'>
                    <button className='BtnEditar'>
                        <div className='iconeEditar'></div>
                    </button>
                </div>
            </div>

        </div>
    )
}