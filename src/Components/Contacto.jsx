import React from 'react'

export const Contacto = () => {
    const contactos = [
        { id: 1, nombre: 'David Jimenez Clemente', puesto: 'Dueño de la empresa', correo: 'davis@hotmail.com', telefono: '1234567890' },
        { id: 2, nombre: 'Lidia Arrollo Sanchez', puesto: 'Gerente' , correo: 'yayayiya@gmail.com', telefono: '9876543210' },
        { id: 3, nombre: 'Juan Sanchez Trujillo', puesto:'Jefe de area' , correo: 'jaunzans@gmail.com', telefono: '4567891230' },
        { id: 4, nombre: 'Miguel Ángel Gomora Martinez ', puesto: 'Operador de torno', correo: 'mikey922701@gmail.com', telefono: '123458880' },
      ];
    
    return (
        <div className="container">
          <div className="background-image"></div>
          <h1 className="display-4 text-success">Contactos directos </h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Correo Electrónico</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map(contacto => (
            <tr key={contacto.id}>
              <td>{contacto.id}</td>
              <td className="display-8 text-success">{contacto.nombre}</td>
              <td>{contacto.puesto}</td>
              <td>{contacto.correo}</td>
              <td>{contacto.telefono}</td>
             
            </tr>
          ))}
        </tbody>
      </table>


        </div>
      );
    }
export default Contacto
