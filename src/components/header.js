import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <header className="tela-1">
        {/* <nav className="menu-1"> */}
        {/* <ul className="ul-list"> */}
        {/* <li> */}
        {/* <a href="#">your/dev</a>
            </li>
            <li>
              <a href="#">Como funciona</a>
            </li>
            <li>
              <a href="#">Planos</a>
            </li>
            <li>
              <a href="#">DúvclassNameas</a>
            </li>
            <li>
              <a href="#">contato</a>
            </li>
            <li>
              <a href="#">Quero meu site</a> */}
        <nav className="links">
          <label for="rd_yourdev">your/dev</label>
          <label for="rd_como_funciona">Como funciona</label>
          <label for="rd_planos">Planos</label>
          <label for="rd_duvclassNameas">Dúvidas</label>
          <label for="rd_contato">Contato</label>
          <label for="rd_quero_meu_site">Quero meu site</label>
        </nav>
        {/* </li> */}
        {/* </ul> */}
        {/* </nav> */}

        <div className="scroll">
          <input
            type="radio"
            name="grupo"
            className="rd_yourdev"
            checked="true"
          />
          <input
            type="radio"
            name="grupo"
            className="rd_como_funciona"
            checked="true"
          />
          <input
            type="radio"
            name="grupo"
            className="rd_planos"
            checked="true"
          />
          <input
            type="radio"
            name="grupo"
            className="rd_duvclassNameas"
            checked="true"
          />
          <input
            type="radio"
            name="grupo"
            className="rd_contato"
            checked="true"
          />
            <input
            type="radio"
            name="grupo"
            className="rd_quero_meu_site"
            checked="true"
            />
        </div>
      </header>
    </div>
  );
}

export default Header;
