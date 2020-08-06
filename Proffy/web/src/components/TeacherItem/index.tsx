import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://blog.unicep.edu.br/wp-content/uploads/2019/07/qual-a-importancia-do-professor-na-formacao-do-aluno-650x427.jpg"
          alt="Professor"
        />
        <div>
          <strong>Professor Pardal</strong>
          <span>Aula da vida</span>
        </div>
      </header>

      <p>
        Oi , sou o professor pardal!
        <br />
        <br />
        Venha ter aula comigo
      </p>

      <footer>
        <p>
          Preço/Hora <strong>R$ 10,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
