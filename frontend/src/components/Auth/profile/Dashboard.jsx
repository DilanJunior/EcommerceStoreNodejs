import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPalette,
  faUserCircle,
  faCommentDots,
  faSearch,
  faAdd,
  faBars,
  faBarsStaggered,
  faBarcode,
  faClose,
  faBridgeCircleCheck,
  faCircleCheck,
  faCirclePlus,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ListSchemas, {
  ListSchemaSDasboard,
  ProductTable,
  UseCrud,
} from "./Schema";

//Example.demoUrl = 'https://codesandbox.io/p/sandbox/tiny-line-chart-5f5vq6';

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("categoryImage", categoryImage);

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/api/Categories`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(formData);
      console.log("Categoría creada:", response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error al crear la categoría:", error);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const [isDark, setisDark] = useState(true);

  return (
    <div className={`flex h-screen ${isDark ? "bg-zinc-700 text-white" : ""}`}>
      {isSidebarVisible && (
        <div className="w-64 h-screen bg-gray-800 text-white">
          <div className="p-4">
            <h3 className="text-xl font-semibold">Dashboard</h3>
          </div>
          <ul className="space-y-2 p-4">
            <li>
              <a href="#" className="block p-2 rounded hover:bg-gray-700">
                <span className="font-semibold">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded hover:bg-gray-700">
                <span className="font-semibold">Orders</span>
              </a>
            </li>
          </ul>

          <div className="p-4">
            <h3 className="text-xl font-semibold">Tablas</h3>
          </div>

          <ListSchemaSDasboard />
        </div>
      )}

      <div className="flex-1 w-full">
        <div className="flex p-3 justify-between items-center border-b">
          <div className="flex items-center gap-5 flex-1 ">
            <FontAwesomeIcon
              icon={isSidebarVisible ? faClose : faBarsStaggered}
              className="text-gray-500 text-2xl"
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            />
          </div>

          <div className="flex justify-between gap-4 px-2 items-center">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-gray-500 text-2xl"
            />
            <FontAwesomeIcon icon={faBell} className="text-gray-500 text-2xl" />
          </div>
        </div>

        <div className="flex-1 flex  items-center justify-between p-3">
          <div className="relative w-48">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 pl-8 rounded bg-gray-200 border-none
                w-full
                "
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex justify-between items-center">
              <button className="bg-gray-600 rounded-lg text-white p-2 font-bold flex justify-center items-center">
                <FontAwesomeIcon icon={faCirclePlus} className="h-5" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <button className="bg-gray-600 rounded-lg text-white p-2 font-bold flex justify-center items-center">
                <FontAwesomeIcon icon={faFile} className="h-5" />
              </button>
            </div>
          </div>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-5 mb-5 rounded shadow"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de la categoría
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="categoryImage"
                className="block text-sm font-medium text-gray-700"
              >
                Imagen de la categoría
              </label>
              <input
                type="file"
                id="categoryImage"
                onChange={(e) => setCategoryImage(e.target.files[0])}
                className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white p-2 rounded"
            >
              Crear Categoría
            </button>
          </form>
        )}
        <ListSchemas />
        <div className="overflow-x-auto p-4 flex items-start  gap-3">

          <ProductTable/>

          {/*    <div className="w-96 bg-gray-200 p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2 h-auto">
              <h3 className="text-lg font-semibold">
                Cambio en la base de datos
              </h3>
              <span className="text-sm text-gray-600">
                14 de agosto de 2024
              </span>
            </div>
            <div className="text-gray-800 divide-y-2">
              <p>
                Se eliminó el <strong>ID</strong> de <strong>Users</strong>.
              </p>
            </div>
          </div>
       */}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
];

const Example = () => {
  return (
    <div className="p-2 border mx-3 w-full rounded-lg shadow-sm">
      <h1>Grafica</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
