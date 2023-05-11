import React, { useEffect, useState } from 'react'
import './searchbar.css'
import axios from 'axios';


export default function SearchBar(){
    const [produtos, setProdutos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(()=>{
        axios
            .get('')
            .then((getdata)=>{
                setProdutos(getdata.data);
            });
    }, []);


 return(
    <div className='search-bar'>
        <div className='search-box'>
            <input type='text' className='input' />
            <div className='btn-box'>
                <button className='btn-search'></button>
            </div>
        </div>
    </div>
 )  
}