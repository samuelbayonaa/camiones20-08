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
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Detalles del Camión</h1>
      <p className="text-lg text-gray-700 mb-2">Capacidad: 2000kg</p>
      <p className="text-lg text-gray-700 mb-2">Consumo: 15L/100km</p>
      <p className="text-lg text-gray-700 mb-2">Carga Actual: 1500kg</p>
      <div className="border-t border-gray-300 my-4"></div> 
      <div className="flex justify-center mt-6">
        <Link to="/cargarcamion">
              <button type="submit" className="py-2 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">Cargar camion</button>
        </Link>
      </div>
    </div>
    </div>
    );
  }
}

export default Inicio;

