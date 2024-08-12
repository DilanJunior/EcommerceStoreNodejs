import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddProduct from "./components/ProductForm";
import MainContent from "./pages/MainContent";
import ListProductCategories from "./components/ListProductCategories";
import MainNavigation from "./components/Navbar";
import { useState } from "react";
import ProductDetailView from "./components/ProductDetailView";
import Dashboard from "./components/Auth/CategoryForm";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import useCategories from "./api/categories";
import RegisterForm from "./components/Auth/Login";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <BrowserRouter>
        <MainNavigation searchQuery={setSearchQuery} />

        <Routes>
          <Route path="/" element={<MainContent searchQuery={searchQuery} />} />
          <Route path="/Categoría" element={<ListProductCategories />} />
        </Routes>

        <Routes>
          <Route path="/createcategory" element={<Dashboard />} />
          <Route path="/form" element={<AddProduct />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/ViewProduct" element={<ProductDetailView />} />

          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//<Route path="/products/:id" element={<ProductDetail />} />
