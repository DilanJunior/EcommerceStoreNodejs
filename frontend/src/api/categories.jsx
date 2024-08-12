import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchListProductCategories = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/categories");
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

  return { data, isLoading, isError, error };
};

export default useCategories;
