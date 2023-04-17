const handleAddSabor = (itempizza) => {
    const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar-sabor"]:checked')).map(
      (checkbox) => checkbox.value
    );
    if (checkboxValues.length >= tamanhopizza.quantia) {
      document.querySelectorAll('input[name="selecionar-sabor"]:not(:checked)').forEach((checkbox) => {
        checkbox.disabled = true;
      });
    } else {
      document.querySelectorAll('input[name="selecionar-sabor"]').forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }
  
    setSelectedItem(itempizza); 
  };
  