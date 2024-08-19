import axios from "axios";

async function AddNewRegister(formData) {
 
  try {
    const response = await axios.post(
      "http://localhost:3000/api/users/register",
      formData, 
      {
        withCredentials: true, // Para enviar cookies con la solicitud
        headers: {
          "Content-Type": "multipart/form-data",
         },
      }
    );

    if (response.status === 201) {
      console.log("Registro exitoso:", response.data);
    }
  } catch (error) {
    if (error.response) {
      console.error("Error del servidor:", error.response.data);
    } else {
      console.error("Error al realizar la solicitud:", error.message);
    }
  }
}

//LOGIN COMUTATION




export default AddNewRegister;
