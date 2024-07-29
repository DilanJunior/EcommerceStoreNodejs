import { useEffect, useState, useRef } from "react";
import Logo from "../assets/images/Logo_B.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faUser,
  faShoppingCart,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Cart } from "./MainContent";

function MainNavigation({ setSearchQuery }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [CartisOpen, setCasrtisOpen] = useState(false);
  //const [searchQuery, setSearchQuery] = useState(""); // Estado para almacenar el valor de búsqueda
  const searchTerm = useRef("");

  //const [searchTerm, SetsearchTerm] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleClick(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  const IsOpenSearchfunction = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setIsOpenSearch(!isOpenSearch);
  };

  const toggleCart = () => {
    setCasrtisOpen(!CartisOpen);
  };

  function CartisOpenfunction(e) {
    e.preventDefault();
    setCasrtisOpen(!CartisOpen);
  }

  return (
    <>
      <nav className="bg-gray-800 p-4 font-playfair">
        <div className="container mx-auto flex  justify-between items-center">
          <div className="text-gray-600 text-xl md:text-white font-bold">
           <a href=""><img src={Logo} alt="" className="w-10 rounded-full" /></a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none "
            >
              <FontAwesomeIcon
                className="w-6 h-5"
                icon={isOpen ? faTimes : faBars}
              />
            </button>
          </div>

          <nav
            className={`text-4xl md:text-xl transition-transform md:bg-inherit md:flex transform md:relative md:translate-x-0 ${
              isOpen
                ? " bg-white z-50 translate-x-0 fixed w-64 h-screen top-0 left-0 "
                : " bg-white z-50 -translate-x-full top-0 left-0 fixed  w-64 h-full  md:w-auto "
            }`}
          >
            <a
              href="/"
              className="block md:inline-block text-gray-600 md:text-white  md:font-normal font-bold px-2 py-2"
            >
              Home
            </a>
            <a
              href="/products"
              className="block md:inline-block text-gray-600 md:text-white  md:font-normal font-bold px-2 py-2"
            >
              Products
            </a>
            <a
              href="/about"
              className="block md:inline-block text-gray-600 md:text-white md:font-normal font-bold px-2 py-2"
            >
              About
            </a>
            <a
              href="/contact"
              className="block md:inline-block text-gray-600 md:text-white  md:font-normal font-bold px-2 py-2"
            >
              Contact
            </a>

            {isOpen && (
              <div className="mt-8 px-0 py-2 text-xl ">
                <a
                  href="/buscar"
                  className="block text-gray-600 p-4 border-b"
                  onClick={IsOpenSearchfunction}
                >
                  <FontAwesomeIcon icon={faSearch} />
                  <span className="ml-2 ">Buscar</span>
                </a>
                <a
                  href="/registrarse"
                  className="block border-b text-gray-600 p-4 "
                >
                  <FontAwesomeIcon icon={faUser} />
                  <span className="ml-2">Registrarse</span>
                </a>
                <hr className="opacity-30 " />
                <a
                  href="/carrito"
                  onClick={CartisOpenfunction}
                  className="block border-b text-gray-600 p-4"
                >
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
          isOpenSearch ? "max-h-100 " : "max-h-0 "
        }`}
      >
        <div className="w-full bg-black">
          <form
            action=""
            className="bg-white relative shadow-md p-2 border-b-2"
            onSubmit={handleClick}
          >
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 z-20">
              <button className="p-1">
                <FontAwesomeIcon icon={faSearch} className="h-4.5 w-4.5" />
              </button>
            </div>
            <input
              ref={searchTerm}
              onChange={handleClick}
              type="text"
              placeholder="Precio, Material, Nombre, Cantidad..."
              className="bg-transparent block pl-8 py-2 w-full border rounded-md text-gray-900 border-none focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            />
            <button
              onClick={IsOpenSearchfunction}
              className="absolute inset-y-0 right-0  mr-4  text-gray-500 focus:outline-none"
            >
              <FontAwesomeIcon
                icon={faX}
                className="h-4.5 w-4.5 relative hover:scale-125 transform transition-transform duration-300"
              />
            </button>
          </form>
        </div>
      </div>

      {CartisOpen && <Cart />}
    </>
  );
}

export default MainNavigation;
