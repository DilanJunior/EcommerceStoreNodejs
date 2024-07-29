import React, { useRef } from "react";

import ProductList from "./ProductList";
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
import AdBanner from "./AdBanner";
import { spread } from "axios";
import "./header.css";
import CarruselCategories from "./Categories";

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

function MainContent({ searchQuery = "" }) {
  return (
    <>
      <AdBanner />

      <div className="px-4">
        <CarruselCategories />

        <div className="flex items-center justify-between ">
          <div className="">
            <h1 className="text-xl font-bold text-red-500 ">
              Nuestro catálogo
            </h1>
          </div>

          <button onClick={() => window.location.href = '/Categor%C3%ADa'} className="bg-transparent flex gap-2 items-center  m-0 font-bold py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition duration-300">
            Ver más
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="relative w-full">
          <div className="absolute w-full h-full opacity-50 z-0  "></div>
          <div className="absolute w-full h-full opacity-50 z-0"></div>
          {/*  {spheres} */}

          <ProductList searchQuery={searchQuery} />
        </div>
      </div>

      <br />
      <br />
      <footer className="bg-gray-800 text-white py-4 px-3 border-b-white ">
        <div className=" mx-auto flex flex-col items-center justify-center">

          <div className="w-full md:w-4/12 p-2 text-center">
            <h2 className="text-white font-bold text-2xl mb-2">
              Suscríbete a nuestro boletín
            </h2>
            <p className="mb-4 text-gray-400">
              Recibe las últimas novedades y ofertas directamente en tu correo.
            </p>
            <form
              /* onSubmit={handleSubmit}  */ className="w-full flex items-center md:flex-nowrap flex-wrap gap-2 p-1 rounded-md"
            >
              <div className="relative w-full">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  id="email"
                  type="email"
                  //value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="m-0 block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                  placeholder="Tu email"

                />
              </div>
              <button
                type="submit"
                className="m-0 py-2 px-4 border block border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Suscribirse
              </button>
            </form>
          </div>

         
        </div>
      </footer>

      <div className="flex py-2 px-3 text-center md:items-center md:justify-between bg-gray-800 text-white justify-center">
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} Bisutería Jacky.
        </p>

        <div className="flex space-x-4 my-4">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-400"></a>
          </div>
      </div>
    </>
  );
}


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
