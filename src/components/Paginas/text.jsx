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
  



