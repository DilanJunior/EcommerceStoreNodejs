import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("categoryImage", categoryImage);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/Categories`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(formData);
      console.log("Categoría creada:", response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error al crear la categoría:", error);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const products = [
    // Agrega tus productos aquí como objetos con nombre e imagen
    { name: "Aerial Coast", image: "/path/to/image1.jpg" },
    { name: "Aligned Parts", image: "/path/to/image2.jpg" },
    { name: "Alone Jogger", image: "/path/to/image3.jpg" },
    // ...
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/6 bg-pink-600 text-white p-5">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 mb-5 rounded"
        />
        <div>
          <h3 className="font-bold">SALES</h3>
          <ul>
            <li>Best sellers</li>
            <li>Average</li>
            <li>Low</li>
            <li>Never sold</li>
          </ul>
          <h3 className="font-bold mt-5">STOCK</h3>
          <ul>
            <li>Out of stock</li>
            <li>1 - 9 items</li>
            <li>10 - 49 items</li>
            <li>50 items & more</li>
          </ul>
          <h3 className="font-bold mt-5">CATEGORIES</h3>
          <ul>
            <li>Animals</li>
            <li>Beard</li>
            <li>Business</li>
            <li>Cars</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 p-5">
        <div className="flex justify-between items-center mb-5">
          <button
            className="bg-pink-600 text-white p-2 rounded"
            onClick={handleToggleForm}
          >
            + CREATE
          </button>
        </div>
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-5 mb-5 rounded shadow"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de la categoría
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="categoryImage"
                className="block text-sm font-medium text-gray-700"
              >
                Imagen de la categoría
              </label>
              <input
                type="file"
                id="categoryImage"
                onChange={(e) => setCategoryImage(e.target.files[0])}
                className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white p-2 rounded"
            >
              Crear Categoría
            </button>
          </form>
        )}

        <div className="grid grid-cols-4 gap-5">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-3 rounded shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="mt-2 text-sm font-medium">{product.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
