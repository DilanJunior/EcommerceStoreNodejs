import React, { useRef } from "react";
import Logo from "../images/logo.png";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faUser,
  faShoppingCart,
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
          {/*  <div className="mb-4 flex justify-between w-full">
            <div className="">
              <h2 className="text-lg font-bold">Contáctanos</h2>
              <p className="text-sm">Email: contact@example.com</p>
              <p className="text-sm">Teléfono: +123 456 7890</p>
            </div>

            <div className="space-x-4 mb-4">
              <h1 className="">Sobre Nosotros</h1>
              <p className="font-extralight">Somos </p>
            </div>
          </div> */}

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
            <a href="#" className="hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <div className="text-sm flex py-2 px-2 text-center bg-gray-800 justify-center">
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} Bisutería Jacky.
        </p>
      </div>
    </>
  );
}

export default MainContent;
