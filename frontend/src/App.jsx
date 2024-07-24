import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import MainContent from "./components/MainContent";
import ListProductCategories from "./components/ListProductCategories";
import MainNavigation from "./components/Navbar";
import ProductDetailView from './components/ProductDetailView'; 
//import {Resizable} from './components/ProductList'

import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>

    

      <MainNavigation setSearchQuery={setSearchQuery} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent searchQuery={searchQuery} />}>
           
            
          </Route>
          <Route path="/form" element={<ProductForm />} />
          <Route path="/Categoría" element={ <ListProductCategories />} />

          <Route path="/ViewProduct" element={< ProductDetailView />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//<Route path="/products/:id" element={<ProductDetail />} />
