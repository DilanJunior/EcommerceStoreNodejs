import React, { useEffect, useState } from "react";
import axios from "axios";
import CarruselCategories from "../product/Categories";
import useCategories from "../../api/categories";

const CategoriesCarousel = ({
  categoryNames,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex overflow-x-scroll space-x-4 py-4 w-5/6 md:w-1/2">
      {categoryNames.map((category, index) => (
        <button
          key={index}
          // Use a unique key for each category
          className={`px-4 py-2 rounded ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const ProductGallery = ({ Products }) => {
 
  const productsToDisplay = Products?.length ? Products : [];

  return (
    <>
      {productsToDisplay.length === 0 ? (
        <p className="text-center font-semibold mt-3">No hay productos disponibles</p> // Muestra este mensaje si no hay productos
      ) : (
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {productsToDisplay.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            {/* Puedes añadir más detalles del producto aquí */}
          </div>
        ))}
      </div>
      )}
    </>
  );
};




const ListProductCategories = () => {
  const { data, isLoading, isError, error } = useCategories();
  const categoryArray = data?.categoryProducts || [];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    if (categoryArray && categoryArray.length > 0) {
      const names = categoryArray.map((obj) => obj.categoryName);
      setCategoryNames(names);

      if (categoryNames.length > 0) {
        setSelectedCategory(names[0]);
      }
    }
  }, [data]); 
 
  //return console.log(categoryArray)
 

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-2 md:flex-row flex-col justify-between">
        <h1 className="text-2xl font-bold md:mb-4">Product Categories</h1>
        <CategoriesCarousel
          categoryNames={categoryNames}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <ProductGallery
        Products={
          categoryArray.find((obj) => selectedCategory === obj.categoryName)?.products
        }
      />
    </div>
  );
};

export default ListProductCategories;
