import axios from "axios";

async function getProducts () {
  try {
    const res = await axios.get(`http://localhost:3000/api/products`);
    
    return res.data;
  } catch (error) {
    return console.error("There was an error fetching the products!");
  }
}


export async function postCreateProduct({ formData }) {

  for (let pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
  
  try {
    const response = await axios.post(
      `http://localhost:3000/api/products`,
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
