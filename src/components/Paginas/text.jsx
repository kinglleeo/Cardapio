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


  return useQuery(['ListaDeProdutosAdicionais', idGrupoOpcoes], () =>
  api.get(`/listaOpcionais/${idGrupoOpcoes}/${idProduto}`).then((getdata) => {
    const data = getdata.data.map((item) => ({
      ...item,
      quantidade: 0,
    }));
    return data;