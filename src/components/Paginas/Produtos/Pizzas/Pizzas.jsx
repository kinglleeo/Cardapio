import { React, useState, useEffect } from 'react'
import Header from '../../../header/Header'
import Navbarpizza from './navbar-pizza/navbar-pizza'
import Salgadas from './sabores-pizza/salgadas'
import ComandaPizza from './valorpizza/ComandaPizza'

export default function ListPizzas(){


    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <ComandaPizza/>
            </div>
            <div>
                <Navbarpizza/>
            </div>
            <div>
                <Salgadas/>
            </div>
        </div>
    )
}