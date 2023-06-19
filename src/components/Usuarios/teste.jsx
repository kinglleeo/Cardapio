
  useEffect(() => {
    listaSaboresPizzas.forEach((item) => {
      if (item.quantidade > 0) {
        const itemIndex = selecionados.findIndex((selecionado) => selecionado.ID_GRADE === item.ID_GRADE);
        if (itemIndex === -1) {
          setSelecionados((prevSelecionados) => [...prevSelecionados, { ...item }]);
        } else {
          setSelecionados((prevSelecionados) => {
            const updatedSelecionados = [...prevSelecionados];
            updatedSelecionados[itemIndex].quantidade = item.quantidade;
            return updatedSelecionados;
          });
        }
      }
    });
  }, [listaSaboresPizzas]);
  
.then(response => {
      console.log('Pedido finalizado enviado com sucesso!');
    })
  .catch(error => {
    console.error('Erro ao enviar o pedido finalizado:', error);
  });

  import React from 'react';

class ImageComponent extends React.Component {
  state = {
    imageUrl: ''
  };

  handleImageUpload = (event) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const base64Url = fileReader.result;
      this.setState({ imageUrl: base64Url });
    };

    fileReader.readAsDataURL(event.target.files[0]);
  };

  render() {
    const { imageUrl } = this.state;

    return (
      <div>
        <input type="file" onChange={this.handleImageUpload} />
        {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      </div>
    );
  }
}

export default ImageComponent;
