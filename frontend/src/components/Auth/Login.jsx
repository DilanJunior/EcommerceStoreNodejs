import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  
  const UserToken = Cookies.get('UserToken')
  


  const handleSubmit = (e) => {
    e.preventDefault();


    console.log(UserToken)
    
    axios
      .post(`http://localhost:3000/api/users/login`, formData, {
        withCredentials: true, 
        headers: {
          "Content-Type": "multipart/form-data",
           Authorization: `Bearer ${UserToken}`
        },
      })
      .then((response) => {
        console.log(response);

       // Cookies.set("token", response.data.token);

        alert(response.data.message);
      })
     /*  .then(() => {
        const Token = Cookies.get("token");
        console.log(Token);
      }) */
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
