import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function getProducts() {
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    return response.data.products || [];
  } catch (error) {
    console.error("There was an error fetching the products:", error);
    return []; // Retorna un array vacío en caso de error
  }
}

export const useProducts = () => {
  const {
    data:products, // Proveer un valor predeterminado para evitar undefined
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return { products, isLoading, isError, error };
};

export async function postCreateProduct({ formData }) {
  for (let pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/products`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    //window.location.href = "/";
    alert("Product added successfully!");
  } catch (error) {
    alert(error.response?.data.message || error.message);
    console.error("Error:", error.response?.data || error.message);
  }
}

export default getProducts;
