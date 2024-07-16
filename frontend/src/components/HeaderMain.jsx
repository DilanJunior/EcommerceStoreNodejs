import React from "react";
import Logo from "../images/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import AdBanner from "../components/AdBanner";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
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
            className={` text-2xl transition-transform md:bg-inherit transform md:relative md:translate-x-0 ${
              isOpen
                ? " bg-red-500 translate-x-0 fixed w-120 h-screen top-0 left-0"
                : " bg-red-500 -translate-x-full top-0 left-0 fixed  w-120 h-full"
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
          </nav>
        </div>
      </nav>

      <AdBanner />

      <div className="flex m-3">
        <div className="flex-grow pl-4 text-Zinc-700">
          <h1 className="text-2xl font-bold">Welcome to My Ecommerce Store</h1>

          <div className="text-sm font-bold leading-loose tracking-wide">
            Texto de ejemplo con clases de tipografía.
          </div>
        </div>
      </div>


            
      <div className="w-auto"></div>
      <div className="container mx-auto py-4">
        <h1 className="text-xl font-bold mb-4">Categorías</h1>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
       

        <div className="flex flex-wrap gap-4 text-base mt-2">
          <div className="w-full md:w-1/3 p-3 flex bg-white rounded-xl shadow-md text-black mx-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            et sint sit, dolorum cum ad inventore porro beatae perferendis,
            sapiente eligendi, sequi officiis fugiat minus quos excepturi nulla
            ullam ducimus!
            <img src={Logo} alt="" className="h-14 rounded" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl text-bold text-blue-500 ">Prendas del día</h1>
      </div>
    </>
  );
}

export default Header;
