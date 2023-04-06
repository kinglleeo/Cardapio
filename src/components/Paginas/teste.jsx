export const handleSelecionarSabor = () => {
    const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar"]:checked')).map((checkbox) => checkbox.value);
  
    if (checkboxValues.length >= 4) {
      document.querySelectorAll('input[name="selecionar"]:not(:checked)').forEach((checkbox) => {
        checkbox.disabled = true;
      });
    } else {
      document.querySelectorAll('input[name="selecionar"]').forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }
  };