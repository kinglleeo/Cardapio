const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
const handleRemoveItem = (itemName) => {
  setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((item) => item !== itemName));
  setSelectedCheckboxes((prevSelectedCheckboxes) => prevSelectedCheckboxes.filter((checkbox) => checkbox !== itemName));
};


<div key={item} className="selected-item">
  {item}
  <button onClick={() => handleRemoveItem(item)}>X</button>
  <input
    type="checkbox"
    name={item}
    checked={selectedCheckboxes.includes(item)}
    onChange={(event) => {
      const { checked } = event.target;
      setSelectedCheckboxes((prevSelectedCheckboxes) =>
        checked ? [...prevSelectedCheckboxes, item] : prevSelectedCheckboxes.filter((checkbox) => checkbox !== item)
      );
    }}
    style={{ display: 'none' }}
  />
</div>


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

  setSelectedItem(itempizza.nome); // seta o nome do item selecionado no estado
  setSelectedCheckboxes((prevSelectedCheckboxes) => [...prevSelectedCheckboxes, itempizza.nome]);
};