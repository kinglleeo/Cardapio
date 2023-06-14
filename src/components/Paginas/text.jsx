const queryClient = useQueryClient();
const listaOpcionais = queryClient.getQueryData(['listaOpcionais', grupoOpcoes, idProduto]);

useEffect(() => {
    Pedido.forEach((item) => {
      const itemExistente = compra.find((compraItem) => compraItem.id === item.id);
      if (!itemExistente) {
        let novoItemPedido = {
          id: item.id,
          cod_produto: '',
          cod_grade: '',
          cod_tamanho: item.tamanhoEscolhido.ID,
          quantidade: item.quantity,
          observacao: item.observacoes,
          opcional: item.adicionalSelecionado
        };
  
        if (tipo === 'NÃO') {
          novoItemPedido = {
            ...novoItemPedido,
            cod_produto: item.produto.ID_PRODUTO,
            cod_grade: item.tamanhoEscolhido.ID_GRADE
          };
        } else if (tipo === 'SIM') {
          novoItemPedido = {
            ...novoItemPedido,
            cod_produto: item.produto.ID,
            cod_grade: item.SaboresSelecionados.ID_GRADE
          };
        }
  
        setCompra((prevCompra) => [...prevCompra, novoItemPedido]);
      }
    });
  }, [Pedido, setCompra, tipo]);
  
  opcional: Array.isArray(item.adicionalSelecionado)
  ? item.adicionalSelecionado.map(add => ({
      Id: add.ID,
      valorVenda: add.VALOR_VENDA,
      quantidade: add.quantidade
    }))
  : [], 

  opcional: item.adicionalSelecionado.map(add => ({
    Id: add.ID,
    valorVenda: add.VALOR_VENDA,
    quantidade: add.quantidade
  })),



  const aumentarQuantidade = (index) => {
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    const valorVenda = new Decimal(updatedListaOpcionais[index].VALOR_VENDA);
    const valorCusto = new Decimal(updatedListaOpcionais[index].VALOR_CUSTO);
    const quantidadeTotal = new Decimal(updatedListaOpcionais[index].quantidadeTotal);
    updatedListaOpcionais[index].quantidade = quantidade.plus(1).toNumber();
    updatedListaOpcionais[index].valorTotalProduto = quantidade.plus(1).times(valorVenda).toNumber();
  
    if (updatedListaOpcionais[index].DIVIDIR === "SIM") {
      updatedListaOpcionais[index].totalCusto = valorCusto.times(quantidade).dividedBy(quantidadeTotal).toNumber();
    } else {
      updatedListaOpcionais[index].totalCusto = valorCusto.times(quantidade).toNumber();
    }
  
    setListaAdicionais(updatedListaOpcionais);
  };
  
  const diminuirQuantidade = (index) => {
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    const valorVenda = new Decimal(updatedListaOpcionais[index].VALOR_VENDA);
    const valorCusto = new Decimal(updatedListaOpcionais[index].VALOR_CUSTO);
    const quantidadeTotal = new Decimal(updatedListaOpcionais[index].quantidadeTotal);
  
    if (quantidade.gt(0)) {
      updatedListaOpcionais[index].quantidade = quantidade.minus(1).toNumber();
      updatedListaOpcionais[index].valorTotalProduto = quantidade.minus(1).times(valorVenda).toNumber();
  
      if (updatedListaOpcionais[index].DIVIDIR === "SIM") {
        updatedListaOpcionais[index].totalCusto = valorCusto.times(quantidade).dividedBy(quantidadeTotal).toNumber();
      } else {
        updatedListaOpcionais[index].totalCusto = valorCusto.times(quantidade).toNumber();
      }
  
      setListaAdicionais(updatedListaOpcionais);
    }
  };



  const aumentarQuantidade = (index) => {
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    const valorVenda = new Decimal(updatedListaOpcionais[index].VALOR_VENDA);
    const quantidadeTotal = new Decimal(updatedListaOpcionais[index].quantidadeTotal);
    updatedListaOpcionais[index].quantidade = quantidade.plus(1).toNumber();
  
    if (updatedListaOpcionais[index].DIVIDIR === "SIM") {
      updatedListaOpcionais[index].valorTotalProduto = valorVenda.times(quantidade).dividedBy(quantidadeTotal).toNumber();
    } else {
      updatedListaOpcionais[index].valorTotalProduto = valorVenda.times(quantidade).toNumber();
    }
  
      setListaAdicionais(updatedListaOpcionais);
  };
  
  const diminuirQuantidade = (index) => {
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    const valorVenda = new Decimal(updatedListaOpcionais[index].VALOR_VENDA);
    const quantidadeTotal = new Decimal(updatedListaOpcionais[index].quantidadeTotal);
  
    if (quantidade.gt(0)) {
      updatedListaOpcionais[index].quantidade = quantidade.minus(1).toNumber();
  
      if (updatedListaOpcionais[index].DIVIDIR === "SIM") {
        updatedListaOpcionais[index].valorTotalProduto = valorVenda.times(quantidade).dividedBy(quantidadeTotal).toNumber();
      } else {
        updatedListaOpcionais[index].valorTotalProduto = valorVenda.times(quantidade).toNumber();
      }
  
      setListaAdicionais(updatedListaOpcionais);
    }
  };