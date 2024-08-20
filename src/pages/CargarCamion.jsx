import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Inicio extends Component {
  componentDidMount() {
    if (!cookies.get('id')) {
      window.location.href = "/register";
    }
  }

  render() {
    const nombre = cookies.get('nombres');
    const email = cookies.get('email');

    console.log('id: ' + cookies.get('id'));
    console.log('nombres: ' + nombre);
    console.log('email: ' + email);

    return (
      <div>
        <nav className="bg-blue-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/inicio" className="text-white font-bold text-2xl">EmpresaTransporte</Link>
          <div className="space-x-4">
          <Link to="/inicio" className="text-white hover:bg-blue-700 py-2 px-4 rounded transition duration-300">Inicio</Link>
          <Link to="/perfil" className="text-white hover:bg-blue-700 py-2 px-4 rounded transition duration-300">Perfil</Link>
          <Link to="/login" className="text-white hover:bg-blue-700 py-2 px-4 rounded transition duration-300">Iniciar sesion</Link>
          </div>
        </div>
      </nav>
    <div className=" container mx-auto my-8 p-6 bg-white shadow-lg w-full md:w-2/5 justify-center items-center rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 bg-white text-center text-gray-800">Cargar Camión</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="matricula" className="block text-sm font-medium text-gray-600">Matrícula</label>
          <input type="text" id="matricula" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="capacidad" className="block text-sm font-medium text-gray-600">Capacidad (kg)</label>
          <input type="text" id="capacidad" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="consumo" className="block text-sm font-medium text-gray-600">Consumo Gasolina</label>
          <input type="text" id="consumo" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="carga" className="block text-sm font-medium text-gray-600">Carga actual</label>
          <input type="text" id="carga" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex space-x-4 mt-6">
          <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">Cargar camión</button>
          <button type="button" className="py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Descargar camión</button>
        </div>
        <Link to="/detallescamion">
        <div className="flex space-x-4 mt-6">
          <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">Volver</button>
        </div>
        </Link>
      </form>
    </div>
    </div>
    );
  }
}

export default Inicio;

