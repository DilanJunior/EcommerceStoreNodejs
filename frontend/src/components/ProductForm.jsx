import React, { useState } from "react";
import axios from "axios";
import { useCategories } from "./ListProductCategories";

const AddProduct = () => {
  const { categories, error } = useCategories();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setcategory] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(image);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("category", category);

      if (category) console.log(category);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.href = "/";
      alert("Product added successfully!");
    } catch (error) {
      alert(error.response?.data.message || error.message);

      console.error("Error:", error.response?.data || error.message);
    }
  };
  return (
    <>
      <div className="max-w-md mx-auto bg-slate-500 shadow-md rounded-lg overflow-hidden md:max-w-lg mt-3">
        <div className="md:flex">
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-4">Add a New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md placeholder-gray-500 bg-gray-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price:</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md placeholder-gray-500 bg-gray-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md placeholder-gray-500 bg-gray-400 "
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image:</label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="mt-1 p-2 w-full border bg-gray-400 border-gray-300 rounded-md placeholder-gray-500 "
                />
              </div>

              <div className="mb-4">
                <label htmlFor="categories" className="block text-gray-700">
                  Selecciona una categoría:
                </label>
                <select
                  id="categories"
                  name="category"
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  required  
                >
                  <option value="">Seleccione una categoría</option>
                  {categories.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;