import React from 'react';
import '../About.css';
import folder from '../assets/folder.png'; // Substitua o caminho da logo

function About() {
    return (
        <section id="about">
        <div className="about">
            <div className="about-container">
                <div className="about-logo">
                    <img src={folder} alt="Logo da OmicronSeg" />
                </div>
                <div className="about-content">
                    <h1 className="headline">Sobre a OmicronSeg</h1>
                    <p className="description">
                        A OmicronSeg é uma empresa dedicada a oferecer soluções de segurança 
                        eletrônica de ponta, cabeamento estruturado e sistemas de alarmes, 
                        garantindo eficiência e proteção para residências e empresas. Nossa 
                        missão é proporcionar tranquilidade e segurança por meio de 
                        tecnologias avançadas e serviços especializados, sempre com 
                        compromisso e qualidade.
                    </p>
                </div>
            </div>
            
        </div>
        </section>
    );
}

export default About;