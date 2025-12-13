import { useState, useEffect } from 'react'
import './style.css'

function Home() {
  const [count, setCount] = useState(0)
  const [iconeTema, setIconeTema] = useState('☀')
  const [imagem, setImagem] = useState("/images/git1.png")

  useEffect(() => {
    const temaSalvo = localStorage.getItem("theme")
    if (temaSalvo === "dark") {
      document.body.classList.add("dark")
      setIconeTema('🌙')
      setImagem("/images/git1.png")
    }
  }, [])

  function Cor() {
    document.body.classList.toggle("dark")

    const temaAtual = document.body.classList.contains("dark") ? "dark" : "light"
    localStorage.setItem("theme", temaAtual)

    // Alternar o ícone
    setIconeTema(temaAtual === "dark" ? '🌙' : '\u2600')
    setImagem(temaAtual == "dark" ? "/images/git.png" : "/images/git1.png")
  }

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
      <nav>
        <h1>Élaff Ramos</h1>
        <div>
          <button onClick={Cor}>{iconeTema}</button>
          <a href="#Projetos">Projetos</a>
          <a href="#Contato">Contato</a>
        </div>
      </nav>

      <main>
        <section id='Sobre'> 
          
          <div>
            <p>
              <h2>Bem-vindo.</h2> <br />
              <b>
                Sou um desenvolvedor em formação com mais de 1 ano de experiência em HTML, CSS e JavaScript. 
                Tenho conhecimento em Python com Django, estou aprendendo React.js e desenvolvendo projetos 
                práticos no estilo Trello, bloco de notas e diário online. Meu foco atual é me tornar um 
                desenvolvedor Full Stack, combinando React no front-end e Django no back-end, com interesse 
                crescente em APIs.
              </b>
            </p>

            <img className='imagem' height="180em" src="/images/foto.png" />
          </div>
        </section>

        <br />

        <section id="Skills">

          <h2>Minhas Habilidades</h2> <br />
          <ul>
            <li>💻 HTML5, CSS3, JavaScript ES6+</li>
            <li>⚛️ React.js (em aprendizado)</li>
            <li>🐍 Python, Django, Django REST Framework </li>
            <li>🗃️ Git, GitHub, LocalStorage, Fetch API </li>
            <li>📦 Em breve: TypeScript, Node.js, SQL</li>
          </ul>

        </section>

        <br /> <br />

        <section id="Aprendizado">

          <h2>Aprendizado Atual</h2> <br />
          <ul>
            <li>📘 React.js (componentes, hooks, roteamento)</li>
            <li>📗 Django REST (APIs seguras com autenticação)</li>
            <li>📙 Git Avançado, Deploy e CI/CD</li>
          </ul>

        </section>

        <br /> <br />
        {/* Este é um comentário dentro do JSX */}

        <section id='Projetos'>
          
          <div>
            <img src="/images/instagram.png" alt="" id='foto'/>
            <span>

              <h4>Login do Instagram</h4> <br />
              <p>
                Clone da tela de login do Instagram com HTML e CSS.
              </p>
              <br />
              <p id='informacao'>
                <a href="https://elafframos.github.io/instagram-login/" target="_blank" rel="noopener noreferrer">View</a>
                <i class="fa-solid fa-circle-info"></i>
              </p>
            </span>

          </div>

          <div>
            <img src="/images/qrcode.png" alt="" id='foto'/>
            <span>
              <h4>Qr Code</h4> <br />
              <p>
                Gerador de Qrcode com HTML, CSS e JavaScript. 
              </p>
              <br />
              <p id='informacao'>
                <a href="https://elafframos.github.io/qr-code-generator/" target="_blank" rel="noopener noreferrer">View</a>
                <i class="fa-solid fa-circle-info"></i>
              </p>
              
            </span>

          </div>

          <div>
            <img src="/images/cadastro.png" alt="" id='foto'/>
            <span>

              <h4>Formulário</h4> <br />
              <p>
                Formulário utilizando HTML, CSS e JavaScript.
              </p>
              <br />
              <p id='informacao'>
                <a href="https://elafframos.github.io/Formulario-de-cadastro/" target="_blank" rel="noopener noreferrer">View</a>
                <i class="fa-solid fa-circle-info"></i>
              </p>
            </span>

          </div>

          <div>
            <img src="/images/clima.png" alt="" id='foto'/>
            <span>

              <h4>Clima</h4> <br />
              <p>
                Site de previsão do tempo com HTML, CSS e JavaScript.
              </p>
              <br />
              <p id='informacao'>
                <a href="https://elafframos.github.io/Previsao-do-tempo/" target="_blank" rel="noopener noreferrer">View</a>
                <i class="fa-solid fa-circle-info"></i>
              </p>
            </span>

          </div>   

          <div>
            <img src="/images/cep.png" alt="" id='foto'/>
            <span>

              <h4>Consulta de Endereço</h4> <br />
              <p>
                Busca de endereço pelo Cep, com HTML, CSS e Javascript.
              </p>
              <br />
              <p id='informacao'>
                <a href="https://elafframos.github.io/Busca-de-cep/" target="_blank" rel="noopener noreferrer">View</a>
                <i class="fa-solid fa-circle-info"></i>
              </p>
            </span>

          </div>

        </section>

      </main>

      <footer id="Contato">
        <p>
          <img src={imagem} alt="" />
          <a href="https://github.com/elafframos" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>

        <p class="copyright">
          &copy; Élaff Ramos | 2025
        </p>

        <p>
          <img src="/images/linkedin.png" alt="" />
          <a href="https://www.linkedin.com/in/elaff-ramos" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>

    </>
  )
}

export default Home