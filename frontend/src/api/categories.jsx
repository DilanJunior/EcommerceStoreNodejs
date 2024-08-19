import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchListProductCategories = async () => {
  try {
   
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories`
    );

    return data;
  } catch (error) {
    console.error("Error getting categories:", error.message);
    throw new Error("Error getting categories");
  }
};

export const useCategories = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchListProductCategories,
  });

  if (isError) {
    console.error("Error:", error.message);
  }

  return { data, isLoading, isError, error };
};

export default useCategories;
