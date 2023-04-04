const blocoItems = document.querySelector('.bloco-items');
const popupWindow = document.createElement('div');
popupWindow.classList.add('popup-window');
popupWindow.innerHTML = `
    <div class='popup-content'>
        <span class='close-btn'>&times;</span>
        <h2>${'NAME'}</h2>
        <p>${'DESCRICAO'}</p>
        <button>Adicionar</button>
    </div>
`;

blocoItems.addEventListener('click', () => {
    document.body.appendChild(popupWindow);
});

popupWindow.querySelector('.close-btn').addEventListener('click', () => {
    document.body.removeChild(popupWindow);
});