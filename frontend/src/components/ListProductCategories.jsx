import React, { useEffect, useState } from "react";
import axios from "axios";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setcategoryProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try { 
        const response = await axios.get("http://localhost:3000/api/categories");

        const {category, categoryProducts} = response.data;
          setCategories(category);
          setcategoryProducts(categoryProducts);
        
      } catch (error) {
        setError(error.message);
        console.error("Error:", error, "message:" ,'Error getting categories');
      }
    };

    fetchCategories();
  }, []);

  return { categories, error, categoryProducts };
};


const CategoriesCarousel = ({ categories, selectedCategory, setSelectedCategory }) => {
  if (!Array.isArray(categories)) {
    return <p>Invalid categories data.</p>;
  }

  return (
    <div className="flex overflow-x-scroll space-x-4 py-4">
      {categories.map((category) => (
        <button
          key={category._id} // Use a unique key for each category
          className={`px-4 py-2 rounded ${
            selectedCategory === category.name ? "bg-blue-500 text-white" : "bg-gray-200"
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
  console.log(categoryProducts)
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
  const { categories, error, categoryProducts } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  
  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0].name);
    }
  }, [categories]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!categories.length) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Categories</h1>
      <CategoriesCarousel
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedCategory && (
        <ProductGallery categoryProducts={categoryProducts.find((category) =>  category.categoryName === selectedCategory)?.products || []} />
      )}
    </div>
  );
};

export default ListProductCategories;
