import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Inicio from './Components/Inicio';
import Clientes from './Components/Clientes';
import Proveedores from './Components/Proveedores';
import Contacto from './Components/Contacto';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="container mt-5">
   <h1 className="display-4 text-success">Bienvenido al sistema de gestion de datos del taller (JB)</h1>
   <div className="background-image"></div>

  

   <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Clientes">Agergar o eliminar Clientes</Link>
            </li>
            <li>
              <Link to="/Proveedores">Agregar o eliminar Proveedores</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Clientes" element={<Clientes />} />
          <Route path="/Proveedores" element={<Proveedores />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>



  );
}

export default App;
