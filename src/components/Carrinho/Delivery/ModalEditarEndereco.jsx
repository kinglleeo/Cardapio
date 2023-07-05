import { React, useState, useEffect } from 'react'
import './modalendereco.css'


export default function ModalEndereco({ enderecoCompleto, setOpenEditarEndereco }){
        
    console.log(enderecoCompleto)
    return(
        <>
        <div className='modalEndereco' onClick={()=> setOpenEditarEndereco(false)}/>
            <div className='centeredEndereco'>
                <div className='endereco'>
                    <div className='enderecoTitulo'> 
                        <div> Editar Endereço </div>
                        <div className='iconeFechar'  onClick={()=> setOpenEditarEndereco(false)}></div>
                    </div>
                        <div className='ContentEndereco'>
                            <button className='btnCadastrarEndereco'> Salvar </button>
                        </div>
                </div>
            </div>
        </>
    )
}