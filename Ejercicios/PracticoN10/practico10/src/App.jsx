import './App.css';
import { useState } from 'react';
import Bienvenido from './Bienvenido';

function App() {

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const generarMensaje = () => {
    if (edad < 18) {
      return `Lo sentimos ${nombre}, no podés usar la app.`;
    } if (edad >= 18) {
      return `Bienvenido/a ${nombre}!`;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje(generarMensaje());
  }

  return (
    <main className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-control'
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          className='form-control'
          placeholder="Tu edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      <br />
      <Bienvenido mensaje={mensaje} />

    </main>
  );
}

export default App;
