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


