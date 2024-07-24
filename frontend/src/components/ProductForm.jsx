import React, { useState } from "react";
import axios from "axios";


const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
 

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(image)
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.href = '/';
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

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 29.99, quantity: 1 },
    { id: 2, name: "Item 2", price: 49.99, quantity: 2 },
  ]);
  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <>
      <div className="max-w-4xl mx-auto text-gray-600 bg-gray-50">
        <h1 className="text-2xl font-bold p-4 border-b">Articulos</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50">Producto</th>
                <th className="px-6 py-3 bg-gray-50">Cantidad</th>
                <th className="px-6 py-3 bg-gray-50 text-right">Precio</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="border rounded px-2 py-1 w-20"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" bg-white rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="mb-2 flex justify-between">
            <span className="font-medium">Original Price</span>
            <span>$6,592.00</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="font-medium">Savings</span>
            <span className="text-red-500">-$299.00</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="font-medium">Store Pickup</span>
            <span>$99.00</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="font-medium">Tax</span>
            <span>$799.00</span>
          </div>
          <div className="mt-4 flex justify-between border-t pt-2">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-semibold text-lg">$7,191.00</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
