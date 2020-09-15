import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {

  // Crear listado de productos
  const [productos, setProductos] = useState([ // HOOKS
    {id: 1, nombre: 'Camisa ReactJS', precio: 50},
    {id: 2, nombre: 'Camisa VueJS', precio: 30},
    {id: 3, nombre: 'Camisa Node.js', precio: 20},
    {id: 4, nombre: 'Camisa Angular', precio: 40}
  ]);

  // State para carrito de compras
  const [carrito, setCarrito] = useState([]);

  // Obtener fecha actual
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo = 'Tienda Virtual'
      />

      <h1> Lista de productos </h1>
      {productos.map(producto => (
        <Producto 
          key = {producto.id}
          producto = {producto}
          productos = {productos}
          carrito = {carrito}
          setCarrito = {setCarrito}
        />
      ))}
      
      <Carrito 
        carrito={carrito}
        setCarrito = {setCarrito}
      />
        
      <Footer 
        fecha = {fecha}  
      />
    </Fragment>
  );
}

export default App;
