import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  // Citas en localStorage (localstorage solo almacena string)
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales)
    citasIniciales = [];

  // Arreglo de citas
  const [citas, setCitas] = useState (citasIniciales);

  // UseEffect para realizar operaciones cuando el state cambia
  // UseEffect siempre es un Arrow Function
  // UseEffect se ejecuta cuando el componente está listo y cuando hay cambio en comp
  useEffect( () => {
    if(citasIniciales)
      localStorage.setItem('citas', JSON.stringify(citas))
    else
      localStorage.setItem('citas', JSON.stringify([]));
  }, [citas, citasIniciales] ); // Se le pasa arreglo vacío (array vacio) para que no se quede ciclando si se llama a una API

  // Función que agrege citas nuevas a las actuales
  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  // Función que elimina una cita por su ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas); // Directamente el setter del useState
  }

  // Mensaje opcional de no hay citas aun
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1> Administrador de pacientes </h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2> {titulo} </h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
