function Projects(){
    return (
        <div  id="projects">
            <section class="projeto-card">
                <img src="../images/movies.png" alt="" />
                
                <div class="projeto-info">
                    <h3>MovieApp</h3>
                    <p>Catálogo interativo com busca e categorias consumindo API externa.</p>
                    
                    <div class="tags">
                    <span>JavaScript</span>
                    <span>API</span>
                    <span>CSS3</span>
                    <span>TMDb API</span>
                    </div>

                    <div class="projeto-links">
                    <a href="https://elafframos.github.io/movie-app/" target="_blank" class="btn-primary">Ver Projeto</a>
                    <a href="https://github.com/elafframos" target="_blank" class="btn-outline">GitHub</a>
                    </div>
                </div>
            </section>
        </div>
    )
   
        
}

export default Projects;