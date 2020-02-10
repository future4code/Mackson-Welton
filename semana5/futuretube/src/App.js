import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1><a href="index.html">FutureTube</a></h1>
        <input type="text" placeholder="Busca" />
      </header>
      <main>
        <nav>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="#">Em alta</a></li>
            <li><a href="#">Inscrições</a></li>
            <li><a href="#">Originais</a></li>
            <ul class="user">
              <li><a href="#">Biblioteca</a></li>
              <li><a href="#">Histórico</a></li>
            </ul>
          </ul>
        </nav>
        <section>
          <article>
            <ul>
              <a href="video1.index">
                <li>
                  <img src={require("./img/1.jpg")} />
                  <h2>Título 1</h2>
                </li>
              </a>
              <a href="pages/video2.html">
                <li>
                  <img src={require("./img/2.jpg")} />
                  <h2>Título 2</h2>
                </li>
              </a>
              <a href="video3.html">
                <li>
                  <img src={require("./img/3.jpg")} />
                  <h2>Título 3</h2>
                </li>
              </a>
              <a href="video4.html">
                <li>
                  <img src={require("./img/4.jpg")} />
                  <h2>Título 4</h2>
                </li>
              </a>
              <a href="video5.html">
                <li>
                  <img src={require("./img/5.jpg")} />
                  <h2>Título 5</h2>
                </li>
              </a>
              <a href="video6.html">
                <li>
                  <img src={require("./img/6.jpg")} />
                  <h2>Título 6</h2>
                </li>
              </a>
              <a href="video7.html">
                <li>
                  <img src={require("./img/7.jpg")} />
                  <h2>Título 7</h2>
                </li>
              </a>
              <a href="video8.html">
                <li>
                  <img src={require("./img/8.jpg")} />
                  <h2>Título 8</h2>
                </li>
              </a>
            </ul>
          </article>
        </section>
      </main>
      <footer>
        <p>&copy; Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
