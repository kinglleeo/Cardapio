import axios from 'axios';
import { React, useState, useEffect } from 'react'


export default function Historico(){
    const [historico, sethistorico] = useState([]);

    useEffect(()=>{
        axios
            .get()
            .then((getdata)=>{
                sethistorico(getdata.data);
            });
    }, []);

    return(
        <div>

        </div>
    )
}