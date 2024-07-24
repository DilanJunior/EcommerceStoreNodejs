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
      {/* <div className="flex items-center justify-between text-Zinc-700">
        <div>
          <h1 className="text-2xl font-bold">Categorías</h1>

          <p className="text-sm font-bold leading-loose tracking-wide">
            Texto de ejemplo con clases de tipografía.
          </p>
        </div>
      </div> */}

      <div className="mb-8 grid grid-cols-2 md:flex md:items-center md:justify-center md:gap-2">
        {categories.map((category, index) => (
          <div key={index} className="relative p-4 w-full sm:w-1/4 lg:w-2/2">
            <div className="relative">
              <img
                src="https://via.placeholder.com/200x100"
                alt={category}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                <h2 className="absolute text-center text-lg font-bold text-white p-2 left-2 bottom-2 bg-black bg-opacity-50 rounded-sm">
                  {category}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselCategories;
