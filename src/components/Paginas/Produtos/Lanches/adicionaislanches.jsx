import { React, useState, useEffect } from 'react'
import '../Style.css'
import { useLocation } from 'react-router-dom';


export default function adicionaislanches( ){
    const { state } = useLocation();
  const { item } = state;
    console.log(item)

    return(
    <div>    
        <div className='corpo-adicionais'>
            <div>
                <div>nome</div>
            </div>
            <div>
                <div>Descricao</div>
            </div>
            <div>
                <div>valor</div>
            </div>            
        </div>
    </div>
    )
}