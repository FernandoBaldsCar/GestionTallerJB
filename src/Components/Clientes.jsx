import React, { useState} from 'react'


const Clientes=()=> {
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
          <h1 className="display-4 text-success">Apartado de clientes</h1>
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
            Lugar de entrega:
            <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" value={matricula} onChange={enviarMatricula} />
          </label>
          <br />
          <label>

          <form>
      <label>
        Selecciona El tipo de material:
        <select value={setOpcionSeleccionada} onChange={enviarCarrera}>
          <option value="Selecciona una material">Selecciona un material </option>
          <option value="Madera">Madera</option>
          <option value="MDF">Mdf</option>
          <option value="Acrilico">Acrilico</option>
          <option value="Metal">Metal</option>
          
        </select>
      </label>
    </form>

          <br />
          Correo Electronico:
            <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" value={correo} onChange={enviarCorreo} />
        <br />
        Seleccionar Foto:
        <input 
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        accept="image/*"
        type="file" onChange={enviarImagen} style={{ width: "100px", height: "100px"}} />
          </label>
          
          
          <br />
          Telefono o WhatsaAp:
            <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" value={telefono} onChange={enviarTelefono} />
        <br />
  
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
              <th>Lugar de entrega</th>
              <th>MAterial a usar en el pedido </th>
              <th>Correo Electronico</th>
              <th>Telefono o WhatsaAp</th>
              <th>Fotografía ejemplo</th>
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
                <td>{dato.telefono}</td>
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



export default Clientes