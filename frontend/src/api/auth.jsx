import axios from "axios";

async function AddNewRegister(formData) {
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  try {
    const response = await axios.post(
      "http://localhost:3000/api/users/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    localStorage.setItem("authToken", response.data.tokenUser);

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

export default AddNewRegister;
