{Array.isArray(listaSaboresPizzas) ? (
    listaSaboresPizzas.map((itemSabor, index) => {
      // Verifica se o subgrupo é igual a "PIZZAS SALGADAS"
      if (listaSalgadasAtiva === Idsalgadas && itemSabor.SUBGRUPOS === "PIZZAS SALGADAS") {
        return (
          <div className='pizza-List' key={itemSabor.ID_GRADE}>
            {/* Resto do código para renderização do item */}
          </div>
        );
      }
      return null;
    })
  ) : null}
  