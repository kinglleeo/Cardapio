
ListaProdutosAdicionais 
const increaseQuantity = (index) => {
    setListaAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade + 1;
      return updatedAdicionais;
    });
    setQuantidadeTotal(quantidadeTotal + 1);
  
    setGruposAdicionais((prevGruposAdicionais) => {
      const updatedGruposAdicionais = [...prevGruposAdicionais];
      const item = updatedGruposAdicionais.find((item) => item.ID_GRUPO_OPCOES === idGrupoOpcoes);
      const adicional = listasAdicionais[index];
      item.totalDaLista = new Decimal(item.totalDaLista).plus(adicional.VALOR_VENDA).toNumber();
      return updatedGruposAdicionais;
    });
  };
  
  const decreaseQuantity = (index) => {
    setListaAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      if (updatedAdicionais[index].quantidade) {
        updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade - 1;
  
        setGruposAdicionais((prevGruposAdicionais) => {
          const updatedGruposAdicionais = [...prevGruposAdicionais];
          const item = updatedGruposAdicionais.find((item) => item.ID_GRUPO_OPCOES === idGrupoOpcoes);
          const adicional = listasAdicionais[index];
          item.totalDaLista = new Decimal(item.totalDaLista).minus(adicional.VALOR_VENDA).toNumber();
          return updatedGruposAdicionais;
        });
      }
      return updatedAdicionais;
    });
  
    if (quantidadeTotal > 0) {
      setQuantidadeTotal(quantidadeTotal - 1);
    }
  };
  
  GruposAdicionais 
  const updateQuantitiesMutation = useMutation((data) => {
    queryClient.setQueryData(['listaOpcionais', data.ID_GRUPO_OPCOES, data.idProduto], data.listaAdicionais);
  
    setGruposAdicionais((prevGruposAdicionais) => {
      const updatedGruposAdicionais = [...prevGruposAdicionais];
      const item = updatedGruposAdicionais.find((item) => item.ID_GRUPO_OPCOES === data.ID_GRUPO_OPCOES);
      const totalDaLista = data.listaAdicionais.reduce((total, adicional) => {
        return new Decimal(total).plus(adicional.VALOR_VENDA * adicional.quantidade).toNumber();
      }, 0);
      item.totalDaLista = totalDaLista;
      return updatedGruposAdicionais;
    });
  });