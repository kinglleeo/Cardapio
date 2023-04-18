const valorTotal = () => {
    const tamanhopizzaValor = tamanhopizza.valor || 0;
    const selectedItemsValor = selectedItems.reduce((total, item) => {
      return total.plus(item.valor || 0);
    }, new Decimal(0));
    const total = new Decimal(tamanhopizzaValor).plus(selectedItemsValor);
    return total.toFixed(2);
  };