import { useEffect, useState, useRef } from "react";
import Logo from "../assets/images/Logo_B.jpg";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faUser,
  faShoppingCart,
  faX,
  faPhone, faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

function MainNavigation({ setSearchQuery }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [CartisOpen, setCasrtisOpen] = useState(false);
  const searchTerm = useRef("");

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
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
    <div>
      <Textslider />
      <nav className="bg-white p-4 z-auto font-playfair">
        <div className="container mx-auto flex justify-between items-center ">
          <a href="#" className="text-2xl">
            <h1>Bisutería Jacky</h1>
          </a>

          <div className="md:hidden z-20">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none "
            >
              <FontAwesomeIcon
                className="w-6 h-5 z-10"
                icon={isOpen ? faTimes : faBars}
              />
            </button>
          </div>

          <div className="absolute md:relative">
            <nav
              className={`text-4xl md:text-xl transition-transform md:bg-inherit md:flex transform md:relative md:translate-x-0 ${
                isOpen
                  ? " bg-white z-50 translate-x-0 fixed w-full h-screen top-0 left-0 "
                  : " bg-white z-50 -translate-x-full top-0 left-0 fixed  w-full h-full  md:w-auto "
              }`}
            >
              <div className="flex flex-col gap-6">

                <div className="container mx-auto  px-2 md:hidden shadow-sm p-4 ">
                  
                  <div className="flex justify-between items-center text-2xl">
                    <a href="#">
                      <h1>Bisutería Jacky</h1>
                    </a>

                    <div className="md:hidden z-20">
                      <button
                        onClick={toggleMenu}
                        className="text-gray-600 focus:outline-none"
                      >
                        <FontAwesomeIcon
                          className="w-6 h-5 z-10 "
                          icon={isOpen ? faTimes : faBars}
                        />
                      </button>
                    </div>
                  </div>

                  
                </div>

                <div className="text-2xl md:hidden flex flex-col w-full container px-3 ">
      <a
        href="/"
        className="text-gray-600 block font-bold py-2 hover:text-gray-800 transition-colors duration-200 border-b"
      >
        Home
      </a>
      <a
        href="/products"
        className="flex justify-between text-gray-600 font-bold py-2 items-center hover:text-gray-800 transition-colors duration-200 border-b"
      >
        Products
        <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-5 h-5" />
      </a>
      <a
        href="/about"
        className="block text-gray-600 font-bold py-2 hover:text-gray-800 transition-colors duration-200 border-b "
      >
        About
      </a>
      <a
        href="/contact"
        className="block text-gray-600 font-bold py-2 hover:text-gray-800 transition-colors duration-200 border-b"
      >
        Contact
      </a>
    </div>

                <div className="flex flex-col gap-4 p-4 md:hidden">
                  <a
                    href="#"
                    className="block text-lg font-semibold text-gray-600"
                  >
                    Joyas
                  </a>
                  <a
                    href="#"
                    className="block text-lg font-semibold text-gray-600"
                  >
                    Anillos De Compromiso
                  </a>
                  <a
                    href="#"
                    className="block text-lg font-semibold text-gray-600"
                  >
                    Alianzas
                  </a>
                  <a
                    href="#"
                    className="block text-lg font-semibold text-gray-600"
                  >
                    Colecciones
                  </a>
                  <a
                    href="#"
                    className="block text-lg font-semibold text-gray-600"
                  >
                    Hombre
                  </a>
                  <a
                    href="#"
                    className="block text-lg font-semibold text-gray-600"
                  >
                    Niños
                  </a>
                </div>

                <div className="text-xl flex items-center md:gap-5 gap-3">
                  {isMobile ? (
                    <a href="" className="block text-gray-600">
                      <FontAwesomeIcon icon={faSearch} />
                      <span className="ml-2"></span>
                    </a>
                  ) : (
                    <div className="md:w-80 w-full md:block">
                      <form
                        className="relative p-1 bg-gray-100 rounded-lg"
                        onSubmit={handleClick}
                      >
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 z-20">
                          <button className="p-1">
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="h-4.5 w-4.5"
                            />
                          </button>
                        </div>
                        <input
                          ref={searchTerm}
                          onChange={handleClick}
                          type="text"
                          placeholder="Precio, Material, Nombre, Cantidad..."
                          className="bg-transparent block pl-10 py-3 w-full border rounded-md text-gray-900 border-none focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        />
                        <button
                          onClick={IsOpenSearchfunction}
                          className="absolute inset-y-0 right-0 mr-4 text-gray-500 focus:outline-none md:hidden"
                        >
                          <FontAwesomeIcon
                            icon={faX}
                            className="h-4.5 w-4.5 relative hover:scale-125 transform transition-transform hidden duration-300"
                          />
                        </button>
                      </form>
                    </div>
                  )}

                  <a href="/registrarse" className="block  text-gray-600 ">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="ml-2"></span>
                  </a>
                  <a
                    href="/carrito"
                    onClick={CartisOpenfunction}
                    className="block  text-gray-600"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="ml-2"></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
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
    </div>
  );
}

const Textslider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    adaptiveHeight: true,
    arrows: false,
    dots: false,
  };

  return (
    <div className="w-full p-1 z-0 bg-lime-100 text-center">
      <Slider {...settings}>
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

export default MainNavigation;
