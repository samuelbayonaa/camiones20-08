import { Link } from 'react-router-dom';

const Register = () => {
  return (
      <div>
        <nav className="bg-blue-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="#" className="text-white font-bold text-2xl">EmpresaTransporte</Link>          
        </div>
      </nav>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex container mx-auto my-8 p-6 bg-white shadow-lg w-full md:w-2/5 justify-center items-center rounded-lg">
        <div className="w-full p-8">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Registrarse</h2>
          <form onSubmit="" className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">Nombre</label>
              <input type="text" id="nombre" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="apellidos" className="block text-sm font-medium text-gray-600">Apellidos</label>
              <input type="text" id="apellidos" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Correo electrónico</label>
              <input type="email" id="email" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="numero" className="block text-sm font-medium text-gray-600">Número telefónico</label>
              <input type="number" id="numero" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Contraseña</label>
              <input type="password" id="password" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Repetir contraseña</label>
              <input type="password" id="password" className="mt-2 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terminos" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
              <label htmlFor="terminos" className="ml-2 block text-sm text-gray-700">Acepto los <a href="#" className="text-blue-600 hover:underline">términos</a></label>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-700">¿Ya tienes cuenta? <Link to="/login" className="text-blue-600 hover:underline">Click aquí</Link></p>
            </div>
            <div className="flex justify-center mt-6">
              <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
