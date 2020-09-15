import React from 'react';
// dentro de llaves es js
function Header ({titulo}) {

  return(
    <h1 id="encabezado" className="encabezado"> {titulo} </h1>
  )
}

export default Header;