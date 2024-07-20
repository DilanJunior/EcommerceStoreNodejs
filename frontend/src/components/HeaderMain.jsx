import React, { useRef } from "react";
import Logo from "../images/logo.png";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import AdBanner from "../components/AdBanner";
import { spread } from "axios";
import "./header.css";
import CarruselCategories from "../components/Categories";

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

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para almacenar el valor de búsqueda
  const searchTerm = useRef("");

  //const [searchTerm, SetsearchTerm] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleClick(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  console.log(searchQuery);

  const IsOpenSearchfunction = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setIsOpenSearch(!isOpenSearch);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 font-playfair">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">My Ecommerce Store</div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {/* AQUI */}

              <FontAwesomeIcon
                className="w-6 h-5"
                icon={isOpen ? faTimes : faBars}
              />
            </button>
          </div>

          <nav
            className={`text-5xl md:text-xl transition-transform md:bg-inherit md:flex  transform md:relative md:translate-x-0 ${
              isOpen
                ? " bg-red-500 z-50 translate-x-0 fixed w-64 h-screen top-0 left-0 "
                : " bg-red-500 z-50 -translate-x-full top-0 left-0 fixed  w-64 h-full  md:w-auto "
            }`}
          >
            <a href="/" className="block md:inline-block text-white px-2 py-1">
              Home
            </a>
            <a
              href="/products"
              className="block md:inline-block text-white px-2 py-1"
            >
              Products
            </a>
            <a
              href="/about"
              className="block md:inline-block text-white px-2 py-1"
            >
              About
            </a>
            <a
              href="/contact"
              className="block md:inline-block text-white px-2 py-1"
            >
              Contact
            </a>

            {!isOpen && (
              
              <div className="mt-8 px-0 py-1 text-2xl">
                <a
                  href="/buscar"
                  className="block text-white p-4"
                  onClick={IsOpenSearchfunction}
                >
                  <FontAwesomeIcon icon={faSearch} />
                  <span className="ml-2">Buscar</span>
                </a>
                <hr className="opacity-30 " />
                <a href="/registrarse" className="block text-white p-4 ">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="ml-2">Registrarse</span>
                </a>
                <hr className="opacity-30 " />
                <a href="/carrito" className="block text-white p-4">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="ml-2">Carrito</span>
                </a>
                <hr className="opacity-30 " />{" "}
              </div>
            )}
          </nav>
        </div>
      </nav>

      <div
        className={`w-full bg-red-500 transition-all duration-700 ease-in-out overflow-hidden transform ${
          isOpenSearch ? "max-h-0 " : "max-h-100 "
        }`}
      >
        <div className="w-full bg-black">
          <form
            action=""
            className="bg-white relative shadow-md p-2"
            onSubmit={handleClick}
          >
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 z-20">
              <button className="p-1">
                <FontAwesomeIcon icon={faSearch} className="h-3.5 w-3.5" />
              </button>
            </div>
            <input
              onChange={handleClick}
              type="text"
              placeholder="Precio, Material, Nombre, Cantidad..."
              className="bg-transparent block pl-8 py-2 w-full border rounded-md text-gray-900 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            />
          </form>
        </div>
      </div>

      <AdBanner />

      <div className="px-4">
        <div className="flex items-center justify-between text-Zinc-700">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome to My Ecommerce Store
            </h1>

            <p className="text-sm font-bold leading-loose tracking-wide">
              Texto de ejemplo con clases de tipografía.
            </p>
          </div>
        </div>

        <CarruselCategories />

        <div className="flex items-center justify-between     ">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-red-500 ">
              Nuestro catálogo
            </h1>
            <h1 className="font-light ">Muchos descuento en Joyas</h1>
          </div>

          <div>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
              Ver más
            </button>
          </div>
        </div>

        <div className="relative w-full">
          {spheres}
          <div className="absolute w-full h-full opacity-50 z-0  "></div>
          <div className="absolute w-full h-full opacity-50 z-0"></div>
          <ProductList searchQuery={searchQuery} />
        </div>
      </div>

      <br />
      <br />
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="mb-4 flex justify-between w-full">
            <div className="">
              <h2 className="text-lg font-bold">Contáctanos</h2>
              <p className="text-sm">Email: contact@example.com</p>
              <p className="text-sm">Teléfono: +123 456 7890</p>
            </div>

            <div className="space-x-4 mb-4">
              <h1 className="">Sobre Nosotros</h1>
              <p className="font-extralight">Somos </p>
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <div className="text-sm flex py-2">
        <p>
          &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos
          reservados.
        </p>
      </div>
    </>
  );
}

export default Header;
