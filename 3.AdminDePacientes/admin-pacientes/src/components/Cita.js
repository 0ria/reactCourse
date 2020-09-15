import React from 'react'
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => ( 
  <div className="cita"> 
    <p> Mascota: <span>{cita.Mascota}</span></p>
    <p> Dueño: <span>{cita.Dueño}</span></p>
    <p> Fecha: <span>{cita.Fecha}</span></p>
    <p> Hora: <span>{cita.Hora}</span></p>
    <p> Descripcion: <span>{cita.Sintomas}</span></p>
    <button
      className="button eliminar u-full-width"
      onClick={ () => eliminarCita(cita.id) }
    >Eliminar &times;</button>
  </div>
 );

 Cita.propTypes = {
   Cita: PropTypes.object.isRequired,
   eliminarCita: PropTypes.func.isRequired
 }
 
export default Cita;