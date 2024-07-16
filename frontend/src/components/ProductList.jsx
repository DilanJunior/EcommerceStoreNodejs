import React, { useEffect, useState } from "react";
import axios from "axios";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  
/* 
  useEffect(() => {
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

  return (
    <div>
      <h1 className="mx-10 text-center">Lista de Productos</h1>
      <ul className="products-ul">
        {products.map((product, index) => (
          <li key={product._id}>
            <img src={product.imageUrl} alt={product.name} />

            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div> 
  ); */
};

export default ProductList;
