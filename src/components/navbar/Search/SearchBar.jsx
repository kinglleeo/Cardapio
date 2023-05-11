import { useState, useEffect } from 'react';

function SearchBar() {
  const [produtos, setProdutos] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // Simulating API call to fetch the list of products
    const fetchData = async () => {
      try {
        const response = await api.get('/listaProdutos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleItemClick = (produtoId) => {
    // Logic to navigate to the item with the given ID
    // Replace it with your actual navigation code
    console.log('Navigating to product with ID:', produtoId);
  };

  const filteredProdutos = produtos.filter((produto) => {
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
          <li key={produto.id} onClick={() => handleItemClick(produto.id)}>
            {produto.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
