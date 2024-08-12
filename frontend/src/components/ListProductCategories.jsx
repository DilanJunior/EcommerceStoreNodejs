import React, { useEffect, useState } from "react";
import axios from "axios";
import CarruselCategories from "./Home/Categories";
import useCategories from "../api/categories";

const CategoriesCarousel = ({
  data,
  selectedCategory,
  setSelectedCategory,
}) => {
  console.log(data);
  if (!Array.isArray(data)) {
    return <p>Invalid categories data.</p>;
  }

  return (
    <div className="flex overflow-x-scroll space-x-4 py-4 w-5/6 md:w-1/2">
      {categories.map((category) => (
        <button
          key={category._id} // Use a unique key for each category
          className={`px-4 py-2 rounded ${
            selectedCategory === category.name
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

const ProductGallery = ({ categoryProducts }) => {
  console.log(categoryProducts);
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {categoryProducts.map((product) => (
        <div key={product._id} className="p-4 border rounded shadow">
          <h2 className="text-lg font-bold">{product.name}</h2>
        </div>
      ))}
    </div>
  );
};

const ListProductCategories = () => {
  const { data, isLoading, isError, error } = useCategories;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryArray = data || [];
  return console.log(data);

  useEffect(() => {
    if (categoryArray && categoryArray.length === 0) {
      setSelectedCategory(category.name[0]);
    }
  }, [data]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-2 md:flex-row flex-col justify-between">
        <h1 className="text-2xl font-bold md:mb-4">Product Categories</h1>
        <CategoriesCarousel
          categories={data.category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {selectedCategory && (
        <ProductGallery
          categoryProducts={
            categoryProducts.find(
              (category) => category.categoryName === selectedCategory
            )?.products || []
          }
        />
      )}
    </div>
  );
};

export default ListProductCategories;
