import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3100/usuarios";
const cookies = new Cookies()


class Login extends Component {
  state = {
    form: {
      email: '',
      password: ''
    }
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  iniciarSesion = async (e) => {
    e.preventDefault(); 
    await axios.get(baseUrl, { params: { email: this.state.form.email, password: md5(this.state.form.password) } })
      .then(response => {
        return response.data;
        
      })
      .then(response => {
          if(response.length>0){
              var respuesta=response[0];
              cookies.set('id', respuesta.id, {path: "/"})
              cookies.set('nombres', respuesta.nombres, {path: "/"})
              cookies.set('email', respuesta.email, {path: "/"})
              alert(`Bienvenid@ ${respuesta.nombres}`)
              window.location.href="/inicio"
          }else{
          alert('El usuario o la contraseña no son correctos')
          }
      })
      .catch(error => {
        console.log(error);
      });
  };



  render() {
    return (
      <div>
        <nav className="bg-blue-500 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="#" className="text-white font-bold text-2xl">EmpresaTransporte</Link>
            <div className="space-x-4">
              <Link to="/register" className="text-white hover:bg-blue-700 py-2 px-4 rounded transition duration-300">Registrarse</Link>
            </div>
          </div>
        </nav>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="flex container mx-auto my-8 p-6 bg-white shadow-lg w-full md:w-2/5 justify-center items-center rounded-lg">
            <div className="w-full p-8">
              <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Iniciar Sesión</h2>
              <form onSubmit={this.iniciarSesion} className="space-y-6"> {/* Aquí se agrega onSubmit */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-600">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="password"
                    onChange={this.handleChange}
                  />
                  <div className="text-center mt-2">
                    <Link to="#" className="text-sm text-blue-600 hover:underline">¿Olvidaste tu contraseña?</Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terminos"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="terminos" className="ml-2 block text-sm text-gray-700">
                    Acepto los <a href="#" className="text-blue-600 hover:underline">términos</a>
                  </label>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700">¿No tienes cuenta? <Link to="/register" className="text-blue-600 hover:underline">Registrarse</Link></p>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit" // Cambia a type="submit" para que funcione con el onSubmit del formulario
                    className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
