import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../../../header/Header'
import axios from 'axios';


export default function Adicionais (){
    const { state } = useLocation([]);
    const { item } = state
    console.log(item)
    
   

    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <div>
                    
                </div> 
                
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}