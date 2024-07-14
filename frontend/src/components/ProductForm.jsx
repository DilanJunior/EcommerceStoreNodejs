// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // Estado para la imagen

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image); // Añadir la imagen al FormData

    axios.post(`${import.meta.env.VITE_API_URL}/products`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      alert('Product added successfully!');
    })
    .catch(error => {
      console.error('There was an error adding the product!', error);
    });
  };

  return (
    <div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
