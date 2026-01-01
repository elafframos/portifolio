import './skills.css'

function Skills(){
    return (
        <div id='sec-skills'>
            <section id="skills">
                <h2 className="section-title">Minhas Habilidades</h2>
                <div className="skills-grid">
                    
                    <div className="skill-group">
                        <h3>Front-End:</h3>
                        <div className="skill-items">
                            <div className="skill-box"><i className="fab fa-js"></i> <span>JavaScript</span></div>
                            <div className="skill-box"><i className="fab fa-react"></i> <span>React.js</span></div>
                            <div className="skill-box"><i className="fab fa-css3-alt"></i> <span>CSS3</span></div>
                    </div>
                    <br />
                        <p>Foco em interfaces reativas e experiência do usuário dinâmica.</p>
                    <br />
                    </div>

                    <div className="skill-group">
                        <h3>Back-End:</h3>
                        <div className="skill-items">
                            <div className="skill-box"><i className="fab fa-python"></i> <span>Python</span></div>
                            <div className="skill-box"><span>Dj</span> <span>Django</span></div>
                        </div>
                        <br />
                        <p>Construção de sistemas escaláveis e integração de dados via APIs.</p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skills;