import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Cursos from "./components/Cursos";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Faz uma requisição GET para o backend para buscar a lista de usuários
    axios
      .get("http://localhost:3001/api/usuarios")
      .then((response) => setUsuarios(response.data))
      .catch((error) => console.error("Erro ao buscar usuários:", error));
  }, []);

  return (
    <div className="App">
      {usuarios.map((usuario) => (
        <div className="titleArea">
          <span>{usuario.nome}</span>
        </div>
      ))}
      <Header />
      <div className="content">
        <Perfil />
        <Cursos />
      </div>
    </div>
  );
}

export default App;
