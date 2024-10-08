import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
//import "../../assets/style/Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFaceSadCry,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import ButtonHover from "./button";
import getProducts, { useProducts } from "../../api/products";

const ProductList = ({ searchQuery }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products, isLoading, isError, error } = useProducts();

  console.log(products);

  useEffect(() => {
    const filterProducts = async () => {
      if (Array.isArray(products) && products == !undefined) {
        console.log("Filtrando productos...");
        const filtered = products.filter((product) =>
          Object.keys(product).some((key) =>
            product[key]
              .toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
        );

        setFilteredProducts(filtered);
      }  
    };

    filterProducts();
  }, [products, searchQuery]);

  if (isLoading) {
    return <h1>Cargando productos...</h1>;
  }

  if (isError) {
    return <h1>Error al cargar productos: {error.message}</h1>;
  }

  var settings = {
    slidesPerRow: 1,

    dots: true,
    speed: 500,
    slidesToShow: 4, // Muestra 3 slides a la vez en pantallas grandes
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // para pantallas medianas
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // para pantallas pequeñas
        settings: {
          className: "center",
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex items-center justify-between mt-5 mb-4 mx-3 ">
        <h1 className="text-3xl font-extrabold italic text-gray-800 md:text-4xl">
          Nuestro catálogo
        </h1>

        <ButtonHover
          text={"Ver más"}
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          onClick={() => (window.location.href = "/Categor%C3%ADa")}
        />
      </div>

      <div className="md:h-72 h-full mb-4 sm:m-0 relative slider-container  overflow-hidden">
        <Slider {...settings}>
          {products.length > 0 ? (
            products?.map((product) => (
              <div key={product.id} className="py-4 px-2">
                <div className="bg-white gallery__item overflow-hidden relative  border-gray-300 shadow-lg transition-transform duration-300 transform hover:scale-105 w-full">
                  {product.imageUrl && (
                    <img
                      src={`${import.meta.env.VITE_STATIC_URL}${
                        product.imageUrl
                      }`}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <div className=" md:items-center md:justify-between hidden">
                    {/* <div className=" flex-col flex-grow hidden">
            <h1 className="text-lg font-semibold text-black truncate">
              {truncate(product.name, 22)}
            </h1>
            <p className="text-black mt-2">${product.price.toFixed(2)}</p>
          <a href="" className="mr-5 text-black hidden">
            <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
          </a>
          </div> */}
                  </div>
                  <div className="flex  justify-between items-center md:justify-center absolute bottom-0 w-full p-1 text-white h-auto bg-black bg-opacity-50 md:p-4 md:hover:flex">
                    <h1 className="text-lg font-semibold truncate">
                      {truncate(product.name, 22)}
                    </h1>
                    <p className="text-gray-300">${product.price.toFixed(2)}</p>
                  </div>
                  <div></div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center mt-2">
              No hay <strong>productos</strong> disponibles en este momento.{" "}
              <FontAwesomeIcon icon={faFaceSadCry} className="text-gray-700" />
            </h1>
          )}
        </Slider>
      </div>
    </>
  );
};

function truncate(str, n) {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
}

export default ProductList;
