import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCategories from "../api/categories";
import { postCreateProduct } from "../api/products";

const AddProduct = () => {
  const { data, isLoading, isError, error } = useCategories();

  const categories = data?.category || [];

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setcategory] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postCreateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("category", category);

      mutation.mutate({ formData });
    } catch (error) {
      alert(error.response?.data.message || error.message);

      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <>
    <a href="http://localhost:5173/" className="rounded-sm bg-slate-500 text-center px-2 py-1">Inicio</a>
     
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
                  {categories?.map((item) => (
                    <option key={item.id} value={item.id}>
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

              {mutation.isLoading && <p>Adding product...</p>}
              {mutation.isError && (
                <p>An error occurred: {mutation.error.message}</p>
              )}
              {mutation.isSuccess && <p>Product added successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
