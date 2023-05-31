import { React, useState, useEffect } from 'react'
import { api } from '../../../../conecções/api';



export default function Pizzas(){
    const [saboresPizzas, setSaboresPizzas] = useState([]);
    

    useEffect(()=>{
        api
            .get(`/listaSaboresPizza/${itemPizza.ID}`)
            .then((getdata)=>{
                setSaboresPizzas(getdata.data);
            });
    }, []);


    return(
        <div>

        </div>
    )


}