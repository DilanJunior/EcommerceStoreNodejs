import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Header from "./components/HeaderMain";
import OffcanvasExample from "./components/Navbar";
import AdBanner from "./components/AdBanner";

function App() {
  return (
    <>

    <OffcanvasExample />

    <AdBanner />
    
      
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>


     <ProductForm /> 


    </>
  );
}

export default App;

//<Route path="/products/:id" element={<ProductDetail />} />
