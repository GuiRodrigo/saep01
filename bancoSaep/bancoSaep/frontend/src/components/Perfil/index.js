import React from "react";

import "./style.css";

export default function Perfil() {
  const Logo = "./logo_faculhub.png";
  return (
    <div className="contentPerfil">
      <button>Entrar</button>
      <img src={Logo} alt="logo" />

      <span className="name">FaculHub</span>
      <span className="ins">Inscrições: 7</span>
    </div>
  );
}
