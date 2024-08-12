import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPalette,
  faUserCircle,
  faCommentDots,faSearch, 
  faAdd
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("categoryImage", categoryImage);

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
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

<div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <h3 className="text-xl font-semibold">Dashboard</h3>
      </div>
      <ul className="space-y-2 p-4">
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            <span className="font-semibold">Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            <span className="font-semibold">Orders</span>
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            <span className="font-semibold">Products</span>
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            <span className="font-semibold">Customers</span>
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            <span className="font-semibold">Reports</span>
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            <span className="font-semibold">Settings</span>
          </a>
        </li>
      </ul>
    </div>



      <div className="flex-1">
        <div className="flex p-3 justify-between items-center border-b">
         
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-gray-500 text-2xl"
            />
          </div>

          <div className="flex justify-between gap-4 border-l-2 px-2">
            <FontAwesomeIcon icon={faBell} className="text-blue-500 text-2xl" />

            <FontAwesomeIcon
              icon={faPalette}
              className="text-green-500 text-2xl"
            />

            <FontAwesomeIcon
              icon={faCommentDots}
              className="text-purple-500 text-2xl"
            />
          </div>
        </div>

        <div className="flex-1 border-b p-3">
      <div className="flex justify-between items-center">
        <button className="bg-pink-600 text-white p-2 rounded font-bold">
          <FontAwesomeIcon icon={faAdd} className="h-4" /> Agregar item
        </button>

        <div className="flex items-center space-x-4">
          {/* Campo de búsqueda */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 pl-8 rounded"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Select para modelos */}
          <select className="border p-2 rounded">
            <option value="">All Models</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
            {/* Añade más opciones según tus necesidades */}
          </select>

          {/* Otros select para filtrar */}
          <select className="border p-2 rounded">
            <option value="">Filter 1</option>
            <option value="filter1">Filter 1 Option</option>
            <option value="filter2">Filter 2 Option</option>
            {/* Añade más opciones según tus necesidades */}
          </select>

          <select className="border p-2 rounded">
            <option value="">Filter 2</option>
            <option value="filter1">Filter 1 Option</option>
            <option value="filter2">Filter 2 Option</option>
            {/* Añade más opciones según tus necesidades */}
          </select>
        </div>
      </div>
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

        <div className="overflow-x-auto p-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Imagen
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Nombre del Producto
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Precio
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Categoría
                </th>
                {/* Añade más columnas si es necesario */}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-4 border-b border-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200 text-sm">
                    {product.name}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200 text-sm">
                    ${product.price}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200 text-sm">
                    {product.category}
                  </td>
                  {/* Añade más celdas si es necesario */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
