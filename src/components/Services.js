import React from 'react';
import '../Services.css'; // Importando o CSS do novo layout
import segurancaImg from '../assets/seguranca-eletronica01.jpg';
import cabeamentoImg from '../assets/cabeamento.jpg';
import confiancaImg from '../assets/confianca.jpg';

function Services() {
    return (
        <section id="services">
            <h2>Nossos Valores</h2>
            <div className="services-list">
                <div className="service-item">
                    <div className="service-image">
                        <img src={segurancaImg} alt="Segurança Eletrônica" />
                    </div>
                    <div className="service-content">
                        <h3>Compromisso com a Segurança</h3>
                        <p>Na OmicronSeg, a segurança é nossa prioridade. Oferecemos soluções de 
                            monitoramento e proteção que garantem tranquilidade e confiança aos nossos
                             clientes.
                             Trabalhamos com as tecnologias 
                            mais avançadas para proteger seu patrimônio e sua família.</p>
                    </div>
                </div>
                <div className="service-item reversed">
                    <div className="service-image">
                        <img src={cabeamentoImg} alt="Cabeamento Estruturado" />
                    </div>
                    <div className="service-content">
                        <h3>Qualidade e Eficiência</h3>
                        <p>Buscamos excelência em cada projeto, utilizando materiais 
                            de alta qualidade e profissionais capacitados. Nosso compromisso
                             é entregar resultados eficientes e que atendam às necessidades
                              específicas de cada cliente,
                             sempre com um alto padrão de qualidade.</p>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-image">
                        <img src={confiancaImg} alt="Sistemas de Alarme" />
                    </div>
                    <div className="service-content">
                        <h3>Atendimento Personalizado</h3>
                        <p>Acreditamos que cada cliente é único. Por isso, 
                            oferecemos soluções sob medida para garantir que 
                            suas necessidades sejam atendidas da melhor forma possível.
                             Nosso time está sempre disponível para fornecer suporte 
                            contínuo e assistência especializada.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
