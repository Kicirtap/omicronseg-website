import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Certifique-se de instalar: npm install emailjs-com
import '../Contact.css';
import logo from '../assets/logo.png'; // Caminho da logo na pasta assets

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_g1dzxmf', // Service ID
            'template_otahz0q', // Template ID
            e.target,
            'k-eidKl5GrrkXh2RB' // User ID (Public Key)
        ).then((result) => {
            alert('Mensagem enviada com sucesso!');
            setFormData({ name: '', email: '', message: '' });
        }, (error) => {
            alert('Erro ao enviar a mensagem, tente novamente.');
        });
    };

    return (
        <section id="contact">
            <h2>Contato</h2>
            <p>Entre em contato conosco para uma consulta ou orçamento.</p>
            <div className="contact-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="message">Mensagem</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="contact-info">
                    <div className="contact-info-logo">
                        <img src={logo} alt="Logo da OmicronSeg" />
                    </div>
                    <br />
                    <p>Email: contato@omicronseg.com.br</p> {/* E-mail original de contato */}
                   
                    <p>
                        Telefone: (21) 9 9627-0083
                        <a href="https://wa.me/5521996270083" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp" style={{ color: '#25D366', marginLeft: '10px' }}></i>
                        </a>
                    </p>
                    <h5>Atendimento</h5>
                    <p>Segunda a Sexta</p>
                    <p>09:00 as 18:00</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;


