import React, { useState} from 'react'


const Proveedores=()=> {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [matricula, setMatricula]=useState('');
    const [opcionseleccionada, setOpcionSeleccionada] = useState('');
    const [correo, setCorreo]=useState('');
    const [telefono, setTelefono] =useState('');
    const [imagen,setImagen]=useState(null)
  
    const [datos, setDatos] = useState([]);
  
    const enviarNombre = (event) => {
      setNombre(event.target.value);
    }
    const enviarEdad = (event) => {
      setEdad(event.target.value);
    }
    const enviarMatricula =(event) =>{
      setMatricula(event.target.value)
    }
    const enviarCarrera=(evento) =>{
      setOpcionSeleccionada(evento.target.value);
    }
    const enviarCorreo=(evento) =>{
      setCorreo(evento.target.value);
    }
    const enviarTelefono=(evento)=>{
      setTelefono(evento.target.value);
    }
    const enviarImagen =(event) =>{
        setImagen(event.target.files[0]);
    }
    const enviar = (event) => {

      event.preventDefault();
      const nuevoDato = { nombre, edad, matricula, opcionseleccionada, correo, telefono };
      if (!nuevoDato.nombre || !nuevoDato.edad || !nuevoDato.matricula || !nuevoDato.opcionseleccionada || !nuevoDato.correo || !nuevoDato.telefono ) {
        alert("Debe ingresar todos los campos");
      return;

      }
      if (imagen) { //&& imagen instanceof Blob
        const reader = new FileReader();
        reader.readAsDataURL(imagen);
        reader.onloadend = () => {
          //nuevoDato.imagen = imagen instanceof Blob ? : 
          nuevoDato.imagen =
          <img src={reader.result} alt="Imagen del alumno" />;
          setDatos([...datos, nuevoDato]);
        };
      } else {
        nuevoDato.correo = correo;
        setDatos([...datos, nuevoDato]);
      }
      

      setDatos([...datos, nuevoDato]);
      setNombre('');
      setEdad('');
      setMatricula('');
      setOpcionSeleccionada('');
      setCorreo('');
      setTelefono('');
      setImagen(null);
    }
  
    const btnEditar = (index) => {
      const dato = datos[index];
      setNombre(dato.nombre);
      setEdad(dato.edad);
      setMatricula(dato.matricula);
      setOpcionSeleccionada(dato.opcionseleccionada);
      setCorreo(dato.correo);
      setTelefono(dato.telefono);
      setImagen(dato.imagen);
      setDatos([...datos.slice(0, index), ...datos.slice(index + 1)]);
    }
  
    const btnEliminar = (index) => {
      setDatos([...datos.slice(0, index), ...datos.slice(index + 1)]);
    }
    return (
      <div>
        <h1 className="display-4 text-success">Apartado de Proveedores</h1>
        <form onSubmit={enviar}>
          <label>
            Nombre:
            <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" value={nombre} onChange={enviarNombre} />
          </label>
          <br />
          <label>
            Dirección:
            <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" value={edad} onChange={enviarEdad} />
          </label>
          <br />
          <label>
            RFC:
            <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" value={matricula} onChange={enviarMatricula} />
          </label>
          <br />
          <label>

          <form>
      <label>
        Plazos de pagos:
        <br></br>
        <select value={setOpcionSeleccionada} onChange={enviarCarrera}>
          <option value="Selecciona el plazo de pagos">Selecione el palzo de pagos</option>
          <option value="A meses con intereses">A meses con intereses</option>
          <option value="A meses sin intereses">A meses sin intereses</option>
          <option value="Pago inmediato en efectivo">Pago inmediato en efectivo</option>
          <option value="Pago inmediato por transferencia">Pago inmediato por transferencia</option>
        </select>
      </label>
    </form>

          <br />
          Correo Electronico:
            <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" value={correo} onChange={enviarCorreo} />
        <br />
        <label>
            Telefono o WhatsaAp:
            <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" value={telefono} onChange={enviarTelefono} />
          </label>
          <br />

        Seleccionar Foto: <br></br>
        <input 
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        accept="image/*"
        type="file" onChange={enviarImagen} style={{ width: "100px", height: "100px"}} />
          </label>
          
          
  
          <button 
          className="py-2 px-10 bg-green-200 hover:bg-lime-700 text-white font-bold uppercase rounded-lg"
          type="submit">Agregar</button>
        </form>
        <br />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>RFC</th>
              <th>Tipo de pago</th>
              <th>Correo Electronico</th>
              <th>Telefono o WhatsaAp</th>
              <th>Fotografía</th>
              <th></th>
              <th></th>
             
            </tr>
          </thead>
          <tbody>
            {datos.map((dato, index) => (
              <tr key={index}>
                <td>{dato.nombre}</td>
                <td>{dato.edad}</td>
                <td>{dato.matricula}</td>
                <td>{dato.opcionseleccionada}</td>
                <td>{dato.correo}</td>
                <td className="w-40 h-40 rounded-full mx-auto">{dato.imagen}</td>
                <td><button 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={() => btnEditar(index)}>Editar</button></td>
                <td><button 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={() => btnEliminar(index)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }



export default Proveedores