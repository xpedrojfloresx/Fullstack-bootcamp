import './App.css';

export default function Bienvenido({ mensaje }) {
  return (
    <div className="bienvenido">
      <h1>{mensaje}</h1>
    </div>
  );
}