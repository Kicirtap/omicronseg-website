import React from 'react';
import '../Home.css';  // Certifique-se de que o caminho da sua folha de estilo esteja correto
import segurancaImg from '../assets/seguranca-eletronica.jpg';  // Importando a imagem de segurança eletrônica
import cabeamentoImg from '../assets/cabeamento-estruturado.jpg';  // Importando a imagem de cabeamento estruturado
import alarmesImg from '../assets/sistemas-alarmes.jpg';  // Importando a imagem de sistemas de alarmes

function Home() {
    return (
        <div className="home">
            <section className="hero" id="home">
                <div className="hero-text">
                    <h1 className="typewriter">Omicron<span className="pipe">|</span>Seg</h1>
                    <p>Soluções inteligentes para um mundo conectado.</p>
                    <a href="#contact" className="cta-button">Mais Informações</a>
                </div>
            </section>
            
            <section className="intro">
                <h2>Seguimentos</h2>
                <p className='subtitle'>
                    A OmicronSeg oferece soluções completas em infraestrutura e suporte tecnológico, desde a consultoria inicial até a execução detalhada de projetos. 
                    Atendemos tanto a demandas pontuais quanto a contratos contínuos, garantindo a implementação eficaz e o suporte ideal para sistemas e tecnologias de sua empresa.
                </p>
                <div className="cards-container">
                    {/* Card 1: Segurança Eletrônica */}
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={segurancaImg} alt="Segurança Eletrônica" className="card-img" />
                            </div>
                            <div className="card-back">
                                <h5 className="card-title">Segurança Eletrônica</h5>
                                <p className="card-text">
                                    O monitoramento contínuo oferece segurança proativa, com tecnologia 
                                    avançada e acesso remoto. Sistemas escaláveis e integráveis reduzem custos, 
                                    prevenindo riscos e danos de forma eficiente e confiável.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Cabeamento Estruturado */}
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={cabeamentoImg} alt="Cabeamento Estruturado" className="card-img" />
                            </div>
                            <div className="card-back">
                                <h5 className="card-title">Cabeamento Estruturado</h5>
                                <p className="card-text">
                                    O cabeamento estruturado garante uma infraestrutura de TI eficiente e organizada, 
                                    proporcionando maior desempenho, escalabilidade e facilidade de manutenção, 
                                    além de reduzir custos a longo prazo.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Sistemas de Alarmes */}
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={alarmesImg} alt="Sistemas de Alarmes" className="card-img" />
                            </div>
                            <div className="card-back">
                                <h5 className="card-title">Sistemas de Alarme</h5>
                                <p className="card-text">
                                    Os sistemas de alarme oferecem proteção personalizada, monitoramento em tempo real e uma resposta rápida a intrusões, garantindo a segurança de seu patrimônio
                                    e tranquilidade para sua família ou empresa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
