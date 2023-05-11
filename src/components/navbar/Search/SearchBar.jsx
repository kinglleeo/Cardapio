import { useState, useEffect } from 'react';

function SearchBar() {
  const [produto, setProduto] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    api.get('/listaProdutos')
      .then((getdata) => {
        setProduto(getdata.data);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredProdutos = produto.filter((produto) => {
    // Faz a filtragem com base no valor de pesquisa
    return produto.nome.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Pesquisar produtos..."
      />

      <ul>
        {filteredProdutos.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
