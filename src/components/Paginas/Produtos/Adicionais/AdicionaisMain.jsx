import { React, useState, useEffect } from 'react'
import Header from '../../../header/Header'
import AdicionaisInfo from './AdicionaisInfo'

export default function AdicionaisMain(){


    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <AdicionaisInfo/>
            </div>
        </div>
    )
}