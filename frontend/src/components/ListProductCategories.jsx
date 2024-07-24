import React, { useState } from 'react';

const categories = ['Electronics', 'Clothing', 'Books', 'Jewelry'];
const products = {
  Electronics: ['Laptop', 'Smartphone', 'Camera'],
  Clothing: ['T-shirt', 'Jeans', 'Jacket'],
  Books: ['Novel', 'Comics', 'Magazine'],
  Jewelry: ['Necklace', 'Ring', 'Bracelet'],
};

const CategoriesCarousel = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex overflow-x-scroll space-x-4 py-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const ProductGallery = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {products.map((product) => (
        <div key={product} className="p-4 border rounded shadow">
          <h2 className="text-lg font-bold">{product}</h2>
        </div>
      ))}
    </div>
  );
};

const ListProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Categories</h1>
      <CategoriesCarousel
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGallery products={products[selectedCategory]} />
    </div>
  );
};

export default ListProductCategories;
