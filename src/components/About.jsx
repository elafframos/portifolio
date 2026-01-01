import './about.css'

function About(){
    return (
        <div>
            <section id='Sobre'> 
          
                <div id='div-sobre'>
                    <p>
                        <h2>Olá, eu sou Élaff Ramos.</h2> <br />
                        
                        <b>
                            Com mais de um ano de experiência prática em tecnologias web, hoje dedico meus esforços na criação de aplicações 
                            modernas e escaláveis. Atualmente, foco na transição para Full Stack, unindo a agilidade do React.js no front-end 
                            à robustez do Django no back-end.
                            Desenvolvi projetos práticos que simulam desafios reais do mercado, como sistemas de gerenciamento (estilo Trello)
                            e ferramentas de produtividade, sempre priorizando a organização de dados através de APIs e a experiência do usuário.
                        
                            <br /> <br />
                            
                            <a href="#projects-grid" id='button-projects'>Ver meus projetos</a>
            
                        </b>
                    </p>

                    <img className='imagem' height="180em" src="/images/foto.png" />
                </div>
            </section>
        </div>
    )
}
export default About;