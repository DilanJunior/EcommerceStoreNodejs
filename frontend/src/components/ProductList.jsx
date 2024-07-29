import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import './Galery.css';

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    console.log(searchQuery);
    axios
      .get(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) => {
        if (response) {
          setProducts(response.data);
        } else {
          setProducts([]);
          console.error(`Error fetching products: ${response.statusText}`);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const filtered = Object.keys(Object.assign({}, ...products));
  console.log(products);

  useEffect(() => {
    const search = () => {
      try {
        const result = products.filter((product) => {
          // Verifica si al menos una propiedad del producto incluye la búsqueda
          return filtered.some((param) =>
            product[param]
              ?.toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );
        });

        setFilteredProducts(result);
      } catch (error) {
        console.error("Error filtering products: ", error);
      }
    };

    search();
  }, [searchQuery, products]);


  return (
    <div className="p-4 mx-auto z-30">
    <div className="gallery">
      {filteredProducts.map((product) => (
        <div
          key={product._id}
          className="border flex flex-col bg-white gallery__item  border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 w-72"
        >
          {product.imageUrl && (
            <img
              src={`${import.meta.env.VITE_STATIC_URL}${product.imageUrl}`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          )}
  
          <div className="p-4 flex flex-col flex-grow">
            <h1 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h1>
            <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ProductList;
