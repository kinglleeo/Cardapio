import React from 'react';

class ImageConverter extends React.Component {
  handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result.split(',')[1];
      console.log(base64String); // Aqui você pode fazer o que quiser com a representação em base64

      // Exemplo de como exibir a imagem convertida
      const imgElement = document.createElement('img');
      imgElement.src = `data:image/jpeg;base64,${base64String}`;
      document.body.appendChild(imgElement);
    };

    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFileChange} />
      </div>
    );
  }
}

export default ImageConverter;
