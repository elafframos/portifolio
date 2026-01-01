import './projects.css'

function Projects(){
    return (
        <div  id="projects-grid">
            <section className="projeto-card">
                <img src="../images/movies.png" id='projeto-img' alt="Movies" />
                
                <div className="projeto-info">
                    <h3>MovieApp</h3>
                    <p>Catálogo interativo com busca e categorias consumindo API externa.</p>
                    
                    <div className="tags">
                    <span>JavaScript</span>
                    <span>API</span>
                    <span>CSS3</span>
                    <span>TMDb API</span>
                    </div>

                    <div className="projeto-links">
                    <a href="https://elafframos.github.io/movie-app/" target="_blank" className="btn-primary">Ver Projeto</a>
                    <a href="https://github.com/elafframos" target="_blank" className="btn-outline">GitHub</a>
                    </div>
                </div>
            </section>

            <br /> <br /> <br /> <br /> <br />

            <section className="projeto-card">
                <img src="../images/trello.png" id='projeto-img' alt="Trello" />
                
                <div className="projeto-info">
                    <h3>Trello</h3>
                    <p>Catálogo interativo com busca e categorias consumindo API externa.</p>
                    
                    <div className="tags">
                    <span>JavaScript</span>
                    <span>Django</span>
                    <span>CSS3</span>
                    </div>

                    <div className="projeto-links">
                    <a href="https://trello-gg4h.onrender.com/tarefa/" target="_blank" className="btn-primary">Ver Projeto</a>
                    <a href="https://github.com/elafframos" target="_blank" className="btn-outline">GitHub</a>
                    </div>
                </div>
            </section>
        </div>
    )
   
        
}

export default Projects;