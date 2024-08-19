import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddProduct from "./components/product/ProductForm";
import MainContent from "./pages/MainContent";
import ListProductCategories from "./components/Category/ListProductCategories";

import { useState, useEffect } from "react";
import ProductDetailView from "./components/product/ProductDetailView";
import Dashboard from "./components/Auth/profile/Dashboard";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import useCategories from "./api/categories";
import RegisterForm from "./components/Auth/Register";
import LoginForm from "./components/Auth/Login";
import axios from "axios";
import Cookies from "js-cookie";
const ObtenerUsers = () => {
  useEffect(() => {
    //const token = Cookies.get('UserToken'); // Obtener el token de la cookie



  axios
      .get("http://localhost:3000/api/users", {
        headers: {
          Authorization: `Bearer ${Cookies.get('UserToken')}`, // Enviar el token en el encabezado Authorization
        },
        withCredentials: true, // Si necesitas enviar cookies con la solicitud
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Users:</h1>
    </div>
  )
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<ObtenerUsers />} />
          <Route path="/" element={<MainContent searchQuery={searchQuery} />} />
          <Route path="/Categoría" element={<ListProductCategories />} />

          <Route path="/createcategory" element={<Dashboard />} />
          <Route path="/form" element={<AddProduct />} />
          <Route path="/Login" element={<LoginForm />} />
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
