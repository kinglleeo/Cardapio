import React, { useEffect, useState } from 'react';
import { api } from '../../../conecções/api'; 
import './searchbar.css';

export default function SearchBar() {
  const [produtos, setProdutos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    api.get('listaProdutos/1').then((getdata) => {
      setProdutos(getdata.data);
    });
  }, []);

  return (
    <div className='search-bar'>
      <div className='search-box'>
        
        <div className='btn-box'>
          
        </div>
      </div>
    </div>
  );
}
