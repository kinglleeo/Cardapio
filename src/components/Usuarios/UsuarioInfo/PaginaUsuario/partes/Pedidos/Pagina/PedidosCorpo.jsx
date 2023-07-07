import { React, useState, useEffect } from 'react'



export default function PedidosCorpo(){
    const [dados, setDados] = useState([]);
    const [pedidos, setPedidos] = useState([{}]);
    
    useEffect(()=>{
        const dados = localStorage.getItem('dados')
            setDados(JSON.parse(dados))
        const pedidos = sessionStorage.getItem('PedidosFeitos')
            setPedidos(JSON.parse(pedidos))
    }, [setDados])


    return(
        <div>
        </div>
    )
}