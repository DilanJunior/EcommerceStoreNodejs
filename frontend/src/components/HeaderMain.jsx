import React from "react";
import Logo from "../images/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import AdBanner from "../components/AdBanner";
import { spread } from "axios";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const generateRandomPosition = () => {
    const top = Math.floor(Math.random() * 80); // Valores entre 0 y 90 para evitar que las esferas salgan del contenedor
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

  return (
    <>
      <nav className="bg-gray-800 p-4 font-playfair ">
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
            className={` text-5xl transition-transform md:bg-inherit  transform md:relative md:translate-x-0 ${
              isOpen
                ? " bg-red-500 z-50 translate-x-0 fixed w-64 h-screen top-0 left-0 "
                : " bg-red-500 z-50 -translate-x-full top-0 left-0 fixed  w-64 h-full"
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

            <div className="mt-8 px-0 py-1 text-2xl">
              <a href="/buscar" className="block text-white p-4">
                <FontAwesomeIcon icon={faSearch} />
                <span className="ml-2">Buscar</span>
              </a>
              <hr className="opacity-30 "/>
              <a href="/registrarse" className="block text-white p-4 ">
                <FontAwesomeIcon icon={faUser} />
                <span className="ml-2">Registrarse</span>
              </a>
              <hr className="opacity-30 "/>
              <a href="/carrito" className="block text-white p-4">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="ml-2">Carrito</span>
              </a>
              <hr className="opacity-30 "/> </div>




          </nav>
        </div>
      </nav>

      <AdBanner />

      <div className="flex">
        <div className="flex-grow pl-4 text-Zinc-700">
          <h1 className="text-2xl font-bold">Welcome to My Ecommerce Store</h1>

          <div className="text-sm font-bold leading-loose tracking-wide">
            Texto de ejemplo con clases de tipografía.
          </div>
        </div>
      </div>

      <div className="w-auto2"></div>
      <div className="container mx-auto py-4">
        <h1 className="text-xl font-bold mb-4 pl-4">Categorías</h1>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>

        <h1 className="text-xl font-bold text-blue-500 ml-4">
          Nuestro catálogo
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 text-base mb-2">
        <div className="w-full md:w-1/3 p-3 flex bg-gray-400  rounded-xl shadow-md text-black mx-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus et
          sint sit, dolorum cum ad inventore porro beatae perferendis, sapiente
          eligendi, sequi officiis fugiat minus quos excepturi nulla ullam
          ducimus!
          <img src={Logo} alt="" className="h-14 rounded" />
        </div>
      </div>

      <div>
        <h1 className="text-xl text-bold text-blue-500 ml-4">
          Prendas del día
        </h1>
      </div>

      <div className="relative w-full">
        {spheres}
        <div className="absolute w-full h-full opacity-50 z-0  "></div>
        <div className="absolute w-full h-full opacity-50 z-0"></div>

        {/* ESTO NO SE ENCIA ADELANTE */}
        <div className="container z-30 p-4 ">
          <div className="flex justify-center items-center w-full relative h- z-30">
            <img
              src="https://cdn-media.glamira.com/media/catalog/category/product_image_top_banner_colliers.jpg"
              alt="Placeholder"
              className="w-full h-80 object-cover rounded-xl"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
