import React, { useEffect, useState } from "react";
import axios from "axios";

import Postagem from "./Postagem";
import "./style.css";

export default function Cursos() {
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Faz uma requisição GET para o backend para buscar a lista de usuários
    axios
      .get("http://localhost:3001/api/postagens")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);
  const ImgPostagem = "./eletromecanica.png";

  return (
    <div className="contentCursos">
      <div className="titleArea">
        <span>Cursos</span>
      </div>
      <Postagem ImgPostagem={ImgPostagem} />
      <Postagem ImgPostagem={ImgPostagem} />
    </div>
  );
}
