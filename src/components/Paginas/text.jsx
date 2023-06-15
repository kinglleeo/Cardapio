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

  useEffect(() => {
    const totalItem = SaboresSelecionados.reduce((acc, item) => {
      const multipliedValue = new Decimal(item.VALOR_VENDA).times(item.quantidade);
      const dividedValue = multipliedValue.dividedBy(quantidadeTotal);
      return acc.plus(dividedValue);
    }, new Decimal(0));
      setValorTotalSabores(totalItem);
  }, [SaboresSelecionados, quantidadeTotal]);

  useEffect(() => {
    Pedido.forEach((item) => {
      const itemExistente = compra.find((compraItem) => compraItem.id === item.id);
      if (!itemExistente) {
        let novoItemPedido = {
          id: item.id,
          id_produto: "",
          id_grade: "",
          id_tamanho: "",
          id_unidade: "",
          valor_custo: item.custoTotal,
          valor_venda: "",
          pizza_mista: item.tipo,
          quantidade: item.quantity,
          observacao: item.observacoes,
          opcional: item.adicionalSelecionado,
          sabores: []
        };
        if (item.tipo === "NAO") {
          novoItemPedido = {
            ...novoItemPedido,
            id_unidade: item.produto.ID_UNIDADE,
            id_produto: item.produto.ID_PRODUTO,
            valor_venda: item.totalCompra,
            id_grade: item.tamanhoEscolhido.ID_GRADE ? (item.tamanhoEscolhido.ID_GRADE) : (""),
            id_tamanho: item.tamanhoEscolhido.ID ? (item.tamanhoEscolhido.ID) : (""),
          };
        } else if (item.tipo === "SIM") {
          novoItemPedido = {
            ...novoItemPedido,
            id_produto: item.IDPizzaMista,
            id_unidade: item.ID_UNIDADE,
            valor_venda: item.totalCompra,
            sabores: item.SaboresSelecionados.map(sabor => ({
              sabor: sabor.PRODUTO,
              id_grade: sabor.ID_GRADE,
              valor_venda: sabor.VALOR_VENDA,
              quantidade: sabor.quantidade
            }))            
          };
        }
          setCompra((prevCompra) => [...prevCompra, novoItemPedido]);
      }
    });
    setCompra((prevCompra) =>
      prevCompra.filter((compraItem) => Pedido.some((item) => item.id === compraItem.id))
    );
  }, [Pedido, setCompra, Pedido.tipo]);