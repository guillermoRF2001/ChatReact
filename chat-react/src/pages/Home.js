import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [usuario, setUsuario] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const handleEntrarChat = () => {
    if (usuario && room) {
      navigate("/chatroom", { state: { usuario, room } });
    } else {
      alert("Por favor, ingresa tu nombre y la sala.");
    }
  };

  return (
    <div>
      <h1>Bienvenido al Chat</h1>
      <input
        type="text"
        placeholder="Tu nombre"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sala (ej: Sala1)"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={handleEntrarChat}>Entrar al Chat</button>
    </div>
  );
}
