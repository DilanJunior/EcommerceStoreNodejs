import { useState, useEffect } from "react";
import axios from "axios";

const schemas = [
  { Nombre: "Usuarios", Url: "users" },
  { Nombre: "Productos", Url: "products" },
  { Nombre: "Categorías", Url: "categories" },
  { Nombre: "Carrito", Url: "cart_items" },
];

function ListSchemas() {
  return (
    <>
      <ul className="w-ful flex">
        {schemas.map((item, index) => (
          <li
            key={index}
            className="border-blue-500 bg-opacity-80 p-1 rounded-lg shadow-md w-52 m-2"
          >
            <h2 className="text-2xl font-bold flex items-center">
              {item.Nombre}
              <svg
                className="w-4 h-4 text-green-500 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l5 5L20 7"
                />
              </svg>
            </h2>
            <span className="text-xl align-middle">15 items</span>
            <p className="text-sm text-gray-600">+3 esta semana</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export function ListSchemaSDasboard() {
  const [SelectSchema, setSelectShema] = useState("");

  return (
    <>
      <ul className="space-y-2 p-4">
        {schemas.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={() => setSelectShema(item.Url)}
              className="block p-2 rounded hover:bg-gray-700"
            >
              <span className="font-semibold">{item.Nombre}</span>
            </a>
          </li>
        ))}
      </ul>

      {SelectSchema && <UseCrud tableName={SelectSchema} />}
    </>
  );
}

export function UseCrud({ tableName }) {
  const [data, setData] = useState([]);
  const [Columns, setColumns] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/${tableName}`)
      .then((response) => {
        setData(response.data.products);
        setColumns(response.data.columns); // Asegúrate de que esto esté en la respuesta
      })
      .catch((error) => console.error(error));
  }, [tableName]);

  if (data.length === 0) {
    return <p>No hay datos disponibles para la tabla seleccionada.</p>;
  }

  return (
    <>
      
    </>
  );
}

export function ProductTable({ Columns, products }) {
  return (
    <>
     
      
      <h1>text</h1>
      <h1>{Columns}</h1>
      {
        <table className="bg-white border w-96 h-2 border-gray-200 rounded-lg shadow-md overflow-hidden text-black">
          <thead>
            <tr>
              {Columns?.map((item, index) => (
                <th
                  key={index} // Asegúrate de agregar claves únicas
                  className="py-3 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="py-4 px-4 border-b border-gray-200">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-4 px-4 border-b border-gray-200 text-sm">
                  {product.name}
                </td>
                <td className="py-4 px-4 border-b border-gray-200 text-sm">
                  ${product.price}
                </td>
                <td className="py-4 px-4 border-b border-gray-200 text-sm">
                  {product.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}

export default ListSchemas;
