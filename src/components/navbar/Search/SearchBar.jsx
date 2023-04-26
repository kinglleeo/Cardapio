import React, { useEffect, useState } from 'react'
import './searchbar.css'
import axios from 'axios';

export default function SearchBar(){
    const [produtos, setProdutos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProdutos(getdata.data);
            });
    }, []);

    const handleSearch =(e)=>{
        setSearchQuery(e.target.value)
    }


 return(
    <div className='search-bar'>
        <div className='search-box'>
            <input type='text' className='input-search' placeholder='busca...' value={searchQuery} onChange={handleSearch}/>
        </div>
    </div>
 )  
}