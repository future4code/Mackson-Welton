import React from 'react';
import logo from './logo.svg';
import './App.css';
import BigCard from './Componentes/BigCard/BigCard';
import SmallCard from './Componentes/SmallCard/SmallCard';
import ImageButton from './Componentes/ImageButton/ImageButton';

function App() {
  return (

    <div className="App">
      <h2>Dados Pessoais</h2>
      <div className="cards">
        <BigCard titulo="Astrodev" img={require("./img/astronauta.png")} 
        descricao="Oi, eu sou o Astrodev. Sou o chefe dos alunos da Future4. Adoro pedir e-mail na sexta-feira e
        esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles." />
      </div>

      <div className="cards">
        <SmallCard icon={require("./img/email.png")} tipodedado="Email:" dado="future4@gmail.com" />
        <SmallCard icon={require("./img/home.png")} tipodedado="Endereço:" dado="Rua do Futuro, 4" />
      </div>
      <ImageButton icon={require("./img/seta.png")} texto="Ver mais" />

      <h2>Experiências profissionais</h2>
      <div className="cards">
        <BigCard titulo="Future4" img={require("./img/astronauta.png")} descricao="Formando desenvolvedores para o futuro!" />
      </div>

      <div className="cards">
        <BigCard titulo="Outsmart" img={require("./img/astronauta.png")} descricao="Criando apps incríveis para grandes clientes." />
      </div>

      <h2>Minhas redes sociais</h2>
      <ImageButton icon={require("./img/facebook.png")} texto="Facebook" />
    </div>

  );
}

export default App;
