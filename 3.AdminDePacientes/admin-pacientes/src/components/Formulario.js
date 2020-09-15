import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

  // Crear state de citas
  const [cita, setCita] = useState ({
    Mascota: '',
    Dueño: '',
    Fecha: '',
    Hora: '',
    Sintomas: ''
  });

  // Crear state para errores
  const [error, setError] = useState(false);

  // Función que se va a ejecutar cuando usuario escirbe input
  const handleChange = (event) => {
    //console.log(event.target.value);
    setCita({
      ...cita,
      [event.target.name] : event.target.value
    })
  }

  // Extraer valores
  const {Mascota, Dueño, Fecha, Hora, Sintomas} = cita;

  //Al enviar formulario
  const submitCita = event => {
    //alert('enviando');
    event.preventDefault();
    
    // Validar info
    if (Mascota.trim() === '' || Dueño.trim() === '' || Fecha.trim() === '' || 
        Hora.trim() === '' || Sintomas.trim() === '') {
      console.log('No enviar formulario vacío');
      setError(true);
      return;
    }

    // Eliminar mensaje de error
    setError(false);

    // Asignar ID (key unica) (con una BBDD lo asignarias desde la misma)
    cita.id = uuid();

    // Crear cita
    crearCita(cita);

    // Reinicar formulario
    setCita({
      Mascota: '',
      Dueño: '',
      Fecha: '',
      Hora: '',
      Sintomas: ''
    });

  }

  return ( 
    <Fragment>
      <h2> Crear cita </h2>

      { error ? <p className="alerta-error"> Todos los campos son obligatorios</p> : null}

      <form
        onSubmit={submitCita}
      >
        <label> Nombre Macota </label>
        <input
          type="text"
          name="Mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={Mascota}
        />
        <label> Nombre Dueño </label>
        <input
          type="text"
          name="Dueño"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={handleChange}
          value={Dueño}
        />
        <label> Fecha </label>
        <input
          type="date"
          name="Fecha"
          className="u-full-width"
          onChange={handleChange}
          value={Fecha}
        />
        <label> Hora </label>
        <input
          type="time"
          name="Hora"
          className="u-full-width"
          onChange={handleChange}
          value={Hora}
        />
        <label> Descripción síntomas </label>
        <textarea 
          className="u-full-width"
          name="Sintomas"
          onChange={handleChange}
          value={Sintomas}
        />
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
   );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}
 
export default Formulario;