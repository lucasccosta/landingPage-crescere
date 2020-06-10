import React, { useState } from 'react';
import './App.css';
import CreativeThinkingUrl from './assets/img/cardescolha.svg'
import EscolharOMelhorUrl from './assets/img/Meeting.svg'
import RecebaEntregasUrl from './assets/img/cardwebsite.svg'
import ObjetivoAlcancado from './assets/img/cardfoguete2.svg'
import Box from './components/Box';





function App() {


  return (
    <div className="section__comoFunciona2004">
      <div className="section__comoFuncionaTitle2004">
        {/*<h1>Como funciona?</h1>
        <p>  Desenvolva sua ideia e o seu site com a gente e aproveite! </p>*/}
      </div>
      <section className="section__comoFunciona_content2004">
        <section class="container2004">
          <Box imgUrl={CreativeThinkingUrl} />
          <Box imgUrl={EscolharOMelhorUrl} text=""/>
          <Box imgUrl={RecebaEntregasUrl} text=""/>
          <Box imgUrl={ObjetivoAlcancado} text="                    "/>
         {/* <Box text="Receba entregas do seu site durante a criação"/> */}
        </section>
      

        
      </section>
    </div>
  );
}

export default App;
