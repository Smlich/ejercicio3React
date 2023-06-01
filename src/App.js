import React, { useState } from 'react';

function App() {
  const [msj, setearMensaje] = useState("(estado a cambiar)");

  return (
    <div className="App">
      <h1>Hola mi amigo {msj}</h1>
      <button onClick={() => setearMensaje("(estado cambiado)")}>cambiar estado</button>
    </div>
  );
}

export default App;
