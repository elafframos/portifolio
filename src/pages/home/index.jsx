import { useState, useEffect } from 'react'
import './style.css'
import './phone.css'
import Projects from '../../components/Projects'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Learn from '../../components/Learn'

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

    <header>
      <nav>
          <h1>Élaff Ramos</h1>
          <div>
            <button onClick={Cor}>{iconeTema}</button>
            <a href="#projects">Projetos</a>
            <a href="#Contato">Contato</a>
          </div>
        </nav>
    </header>
      
      <main>
        {/* Chamando o Sobre*/}
        <About />

        <br />

        {/* Chamando  os Projetos */}
        <Projects />

        <br /> <br />

        {/* Chamando as Habilidades */}
        <Skills />

        <br /> <br />

        {/* Chamando os Aprendizados */}
        <Learn />

      </main>

      {/* Créditos */}
      <footer id='Contato'>
          <p>
          <img src={imagem} alt="" />
          <a href="https://github.com/elafframos" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>

          <p class="copyright">
          &copy; Élaff Ramos | 2026
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