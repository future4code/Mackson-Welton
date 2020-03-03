import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Components/Feed/Feed';

function App() {
  return (
    <div className="App">
      <Feed perfil={require("./img/perfil.png")} nome="Astronalta" post={require("./img/astronauta.jpg")}/>
      <Feed perfil={require("./img/perfil.png")} nome="Astronalta" post={require("./img/astronauta2.jpg")}/>
      <Feed perfil={require("./img/perfil.png")} nome="Astronalta" post={require("./img/astronauta3.jpg")}/>
    </div>
  );
}

export default App;
