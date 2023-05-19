const queryClient = useQueryClient();
const listaOpcionais = queryClient.getQueryData(['listaOpcionais', grupoOpcoes, idProduto]);

useEffect(() => {
    const calcularTotal = () => {  
      let valorTotal = new Decimal(0);
        listasAdicionais.forEach((item) => {
          const quantidade = item.quantidade;
          const valor = new Decimal(item.VALOR_VENDA || 0);
          const subtotal = valor.times(quantidade);
            valorTotal = valorTotal.plus(subtotal);
        });
      return formCurrency.format(valorTotal)
    };
  console.log(calcularTotal())
  }, [listasAdicionais]);

  const queryCache = queryClient.getQueryCache();
  const cachedQueries = queryCache.findAll('listaOpcionais');
  
  
    const listaOpcionaisCache = cachedQueries.map((query) => {
      const data = query.state.data;
        return data;
    });
    console.log(listaOpcionaisCache);,



    const queryCache = queryClient.getQueryCache();
    const cachedQueries = queryCache.findAll('listaOpcionais');

    const listaOpcionaisCache = cachedQueries.map((query) => {
        const data = query.state.data;
            return data;
    });
        let total = 0;

        listaOpcionaisCache.forEach((listaOpcionais) => {
        listaOpcionais.forEach((item) => {
            total += item.valorTotalProduto;
        });
        });

console.log(total);

useEffect(() => {
    // ... existing code ...
  
    let total = 0;
    listaOpcionaisCache.forEach((listaOpcionais) => {
      listaOpcionais.forEach((item) => {
        total += item.valorTotalProduto;
      });
    });
  
    setTotalValue(total);
  }, [listaOpcionaisCache]);