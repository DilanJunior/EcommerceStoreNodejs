import React, { useRef } from "react";
import Slider from "react-slick";
import ProductList from "../components/product/ProductList";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faUser,
  faShoppingCart,
  faArrowLeft,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import AdBanner from "../components/product/AdBanner";

//import "..assets/styles/header.css";
import CarruselCategories from "../components/product/Categories";
import MainNavigation from "../layout/Navbar";

const generateRandomPosition = () => {
  const top = Math.floor(Math.random() * 80);
  const left = Math.floor(Math.random() * 80); // Valores entre 0 y 90 para evitar que las esferas salgan del contenedor
  return { top: `${top}%`, left: `${left}%` };
};

const spheres = Array.from({ length: 3 }, (_, i) => (
  <div
    key={i}
    className="absolute w-24 h-24 rounded-full"
    style={generateRandomPosition()}
  >
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-blue-400 blur-xl"></div>
      <div className="absolute inset-0 rounded-full bg-white opacity-20 mix-blend-overlay"></div>
    </div>
  </div>
));

function MainContent() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    <MainNavigation />
      <div className="z-10">
        <AdBanner />

        <CarruselCategories />

        <ProductList searchQuery={searchQuery} />
      </div>

      <div className="w-full p-4 text-center flex flex-col items-center">
        <h2 className="text-gray-800 font-bold text-2xl mb-2">
          Suscríbete a nuestro boletín
        </h2>
        <p className="mb-4 text-gray-700">
          Recibe las últimas novedades y ofertas directamente en tu correo.
        </p>
        <form className="w-full flex items-center md:w-4/12 md:flex-nowrap flex-wrap gap-2 p-1 relative rounded-md">
          <div className="relative w-full">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              id="email"
              type="email"
              className="block w-full pl-10 pr-10 py-2 border text-gray-800 border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
              placeholder="Tu email"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 m-0 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>

      
    </>
  );
}

const Textslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="w-full p-5">
      <Slider>
        <div>
          <h3>Texto 1</h3>
        </div>
        <div>
          <h3>Texto 2</h3>
        </div>
        <div>
          <h3>Texto 3</h3>
        </div>
        <div>
          <h3>Texto 4</h3>
        </div>
      </Slider>
    </div>
  );
};

const SecondGallery = () => {
  const images = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
  ];

  return (
    <div className="grid grid-flow-col grid-rows-3" style={{ height: "500px" }}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`p-1 ${
            index === 0 || index == 3
              ? "row-span-2 col-span-1"
              : "row-span-1 col-span-2"
          }`}
        >
          <img
            src={src}
            alt={`Gallery Image ${index}`}
            className={`w-full h-full object-cover rounded-lg`}
          />
        </div>
      ))}
    </div>
  );
};

export function Cart() {
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
      <div className="max-w-4xl mx-auto text-gray-600 absolute right-0 z-20 h-screen bg-gray-50">
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

export default MainContent;
