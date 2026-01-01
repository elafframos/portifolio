import './contact.css'

function Learn(){
    return (
        <div id='sec-contact'>
            <section id="contato">
                <h2>Vamos conversar?</h2> <br />
                <p>Estou em busca de novas oportunidades e desafios técnicos.</p> <br />
                <div className="contato-links">
                    <a href="mailto:elaff.dev@gmail.com" className="btn-contato">E-mail</a>
                    <a href="https://linkedin.com/in/elaff-ramos" target="_blank" className="btn-contato">LinkedIn</a>
                    <a href="Curriculo_Elaff_Ramos.pdf" download className="btn-cv">Download CV</a>
                </div>
            </section>
        </div> 
    )
}

export default Learn;