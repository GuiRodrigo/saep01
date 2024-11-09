import React from "react";
import "./style.css";

export default function Postagem({ ImgPostagem }) {
  const Flecha = "./flecha_cima_vazia.svg";
  const Chat = "./chat.svg";

  return (
    <div className="postagem">
      <div className="postagemHeader">
        <span>Inteligencia Artificial</span>
        <span>PUC-MG</span>
      </div>
      <div className="postagemBody">
        <img className="imgPost" src={ImgPostagem} alt="" />
      </div>
      <div className="postagemFooter">
        <div className="postagemFooterActions">
          <img className="icon" src={Flecha} alt="Enviar" />
          <span>4</span>
        </div>
        <div className="postagemFooterActions">
          <img className="icon" src={Chat} alt="Comentarios" />
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
