import { React, useState, useEffect } from 'react'
import '../Style.css'


export default function adicionaislanches( item ){
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