import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const CarruselCategories = ({}) => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const obtener_categories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categories"
        );
        console.log(response);
        setCategories(response.data.category);
      } catch (error) {
        console.error("Error getting categories:", error);
      }
    };

    obtener_categories();
  }, []);

  if (!Array.isArray(Categories) || Categories.length === 0) return;

  return (
    <div className="grid grid-flow-col grid-rows-3 md:grid-rows-1 my-3 z-0" style={{ height: "400px" }}>
  {Categories.slice(0, 4).map((category, index) => (
    <div
      key={index}
      className={`p-1 ${
        index === 0 || index === 3
          ? "row-span-2 col-span-1 md:row-span-1 md:col-span-1"
          : "row-span-1 col-span-1 md:row-span-1 md:col-span-1"
      }`}
    >
      <div className="relative h-full">
        <img
          src="https://via.placeholder.com/800x400"
          alt={category.name}
          className="w-full h-full object-cover relative"
        />
        <h2 className="absolute top-0 flex items-center justify-center text-center text-lg font-bold p-2 uppercase bg-black text-white bg-opacity-50">
          {category.name}
        </h2>
      </div>
    </div>
  ))}
</div>


  )
};

export default CarruselCategories;
