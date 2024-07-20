import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from 'react-slick';


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
  console.log(filtered)

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de elementos a mostrar en pantalla
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container p-4 mx-auto w-full">
    <Slider {...settings} className="space-y-4">
      {filteredProducts.map((product) => (
        <div
          key={product._id}
          className="flex flex-col gap-3 border bg-slate-400 border-gray-300 rounded-lg overflow-hidden shadow-md h-60 w-full"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h1 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h1>
            <p className="text-gray-600">${product.price}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  
  );
};

export default ProductList;
