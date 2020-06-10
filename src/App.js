import React from "react";
import Header from "./components/header";
import Section1 from "./components/section1";
import Img from "./components/assets/imagens/Img.jpg";
import Section2 from "./section2";

import "./App222.css";
import CreativeThinkingUrl from "./assets2/img/cardescolha.svg";
import EscolharOMelhorUrl from "./assets2/img/Meeting.svg";
import RecebaEntregasUrl from "./assets2/img/cardwebsite.svg";
import ObjetivoAlcancado from "./assets2/img/cardfoguete2.svg";
import Box from "./components/Box";

import "./App333.css";
import Card from "./components/Card";
import Faq from "./components/Faq";
import landing from "./components/assets3/img/landing.svg";
import wordpress from "./components/assets3/img/wordpress.svg";
import personalize from "./components/assets3/img/personalize.svg";

import './footer.css';
import { FaHeart } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import footerlogo from './components/assets4/flogo.svg';

import "./App.css";

function App() {
  return (
    <>
      <div
        className="background"
        Img
        style={{ backgroundImage: `url(${Img})` }}
      >
        <Header />
        <Section1 />
      </div>
      <Section2 />
      <div className="section__comoFunciona2004">
        <div className="section__comoFuncionaTitle2004">
          {/*<h1>Como funciona?</h1>
        <p>  Desenvolva sua ideia e o seu site com a gente e aproveite! </p>*/}
        </div>
        <section className="section__comoFunciona_content2004">
          <section class="container2004">
            <Box imgUrl={CreativeThinkingUrl} />
            <Box imgUrl={EscolharOMelhorUrl} text="" />
            <Box imgUrl={RecebaEntregasUrl} text="" />
            <Box imgUrl={ObjetivoAlcancado} text="" />
            {/* <Box text="Receba entregas do seu site durante a criação"/> */}
          </section>
        </section>
      </div>

      {/*Código do Leonardo*/}

      <h1 id="planos">Planos</h1>
      <div className="todos">
        <div>
          <div id="container">
            <div className="cards">
              <Card imgUrl={landing} />
              <Card imgUrl={wordpress} />
              <Card imgUrl={personalize} />
            </div>
          </div>
        </div>
        <div className="info_planos">
          <p className="titulo_inclui">Todos os planos incluem:</p>
          <div>
            <ul className="lista">
              <li>Consultoria para seu negócio digital (1 hora)</li>
              <li>Suporte técnico por 1 mês</li>
              <li>Hospedagem por 1 ano (Umbler)</li>
              <li>Integração com banco de dados (MongoDB)</li>
            </ul>
          </div>
        </div>{" "}
        <button className="cta_quero"><a href="https://forms.gle/8JE8y95muRiirWfF8" target="_blank">Quero meu site!</a></button>
      </div>
      <div>
        <div class="perguntas">
          <div class="img_perguntas">
            {" "}
            <img
              src={require("./components/assets3/img/perguntas.svg")}
              alt="perguntas"
              className="imgPerguntas"
            ></img>
          </div>
          <div>
            <Faq />
          </div>
        </div>
      </div>

         {/*Código da Maira*/}

         <div className="main-footer">
            <div className="f-container">
                <div className="f-rows">
                    {/* Column 1*/}
                        <div className="f-col1">
                             <a
                                className="f-icon"
                                href="https://www.instagram.com/yourdevbr/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                               <FaInstagram size="30px"></FaInstagram>
                            </a>
                            <a
                                className="f-icon"
                                href="https://www.facebook.com/yourdev.br"
                                target="_blank"
                                rel="noopener noreferrer"
                            > 
                              <FaFacebookF size="30px"></FaFacebookF> 
                            </a>
                            <a
                                className="f-icon"
                                href="https://www.linkedin.com/company/yourdev/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              <FaLinkedinIn size="30px"></FaLinkedinIn> 
                            </a>
                            <h4>contato@yourdev.com.br</h4>
                        </div>
                        <div className="f-vl"></div>
                    {/* Column 2*/}
                        <div className="f-col2">
                        <ul className="ful2">
                                <li> Brasil</li>
                                <li> Rua Rodrigo Silva, 34 - 6° andar</li>
                                <li> Centro, Rio de Janeiro</li>
                            </ul>
                        </div>
                </div>
                <div className="bottom-row">
                <img src={footerlogo}  className="f-logo"/>
                  <p className="copy"> 
                   <a className="f-A">Feito com muito carinho pela equipe A <span className="equipe"> Equipe A: Caio Barbosa | Gabriel Pavão | Hudna Mendonça | Larissa Araujo | Letícia Vieira| Suzana Salles | Carol Geraldo | Jan Menezes| Lucas Costa | Leonardo Azeredo | Maira Lopes | Matheus Dias | Rafael Simas | Taiane Borges</span></a> <FaHeart className="f-heart"></FaHeart>
                  </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
