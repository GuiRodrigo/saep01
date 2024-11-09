import React from "react";

import "./style.css";

export default function Header() {
  const Instagram = "./instagram.webp";
  const Twitter = "./twitter.png";

  return (
    <header>
      <h1>FaculHub - O Curso Certo Para Você</h1>
      <div className="icons">
        <img className="icon" src={Instagram} alt="insta" />
        <img className="icon" src={Twitter} alt="twitter" />
      </div>
    </header>
  );
}
