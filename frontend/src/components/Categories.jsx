// CarruselCategories.js
import React from "react";
import Slider from "react-slick";

const CarruselCategories = () => {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Cambia según la cantidad de categorías que quieras mostrar al mismo tiempo
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Ajusta el punto de ruptura para dispositivos móviles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const categories = [
    "Categoría 1",
    "Categoría 2",
    "Categoría 3",
    "Categoría 4",
  ];

  return (
    <div className="w-auto m-auto py-4">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <div key={index} className="relative p-4">
          <div className="relative">
            <img
              src="https://via.placeholder.com/200x100"
              alt={category.name}
              className="w-full h-full object-cover rounded-full"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <h2 className="absolute text-center text-lg font-bold text-white p-2 left-2 bottom-2 bg-black bg-opacity-50 rounded-sm">
                {category.name}
              </h2>
            </div> */}
            
          </div>
        </div>
      ))}
    </div>
  </div>
  )};  

export default CarruselCategories;
