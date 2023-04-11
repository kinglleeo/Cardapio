import { React, useState, useEffect } from 'react'

export default function SelecionarSabor(props){
  const [quantidadeSabores, setQuantidadeSabores] = useState('')
  const [selecionado, setSelecionado] = useState(false);

  const handleSelecionarSabor =(e)=>{  
    const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar"]:checked')).map((checkbox) => checkbox.value);
    
    localStorage.setItem('saboresSelecionados', JSON.stringify(checkboxValues));
    
    if (checkboxValues.length >= quantidadeSabores) {
      document.querySelectorAll('input[name="selecionar"]:not(:checked)').forEach((checkbox) => {
        checkbox.disabled = true;
      });
    } else {
      document.querySelectorAll('input[name="selecionar"]').forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }
  }

  useEffect(()=>{
      const quantidadeSabores = localStorage.getItem('quantidadeSabores');
            setQuantidadeSabores(quantidadeSabores)
  })

  return(
    <div>
      <div>
        <input type='checkbox' name='selecionar' onClick={handleSelecionarSabor}/>
      </div>
    </div>      
)}