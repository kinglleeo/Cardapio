import { React, useState, useEffect } from 'react'
import './terminal.css'
import TopoHeaderBar from '../../header/TopoHeaderBar'
import CorpoTerminal from './partes/CorpoTerminal'
import Footer from '../../Footer/Footer'

export default function Terminal(){
    const [adm, setAdm] = useState(null);
    const [empresa, setEmpresa] = useState('')
    console.log(empresa)
    useEffect(()=>{
        const adm = localStorage.getItem('administrador')
            setAdm(adm);
        const empresa = localStorage.getItem('empresa')
            setEmpresa(JSON.parse(empresa))
    }, [])

    return(
        <div>
            {adm !== null ? (
            <div className='MainTerminal'>
                <div className='CorpoTerminal'>
                    <div>
                        <TopoHeaderBar/>
                    </div>
                    <div>
                        <CorpoTerminal
                            nomeEmpresa={empresa.find((item) => item.NOME_FANTASIA)}
                        />
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
            ) : null}
        </div>
    )
}