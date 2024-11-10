import React, { useState } from 'react';
import logo from '../assets/logo.png';  // Importa a logo

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="OmicronSeg Logo" className="logo" />
            </div>

            {/* Botão de menu hamburguer */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div
                    className={`line ${isMenuOpen ? 'open' : ''}`}
                    style={{
                        transform: isMenuOpen
                            ? 'rotate(45deg) translate(5px, 5px)'
                            : 'rotate(0)',
                    }}
                ></div>
                <div
                    className={`line ${isMenuOpen ? 'open' : ''}`}
                    style={{
                        opacity: isMenuOpen ? 0 : 1,
                    }}
                ></div>
                <div
                    className={`line ${isMenuOpen ? 'open' : ''}`}
                    style={{
                        transform: isMenuOpen
                            ? 'rotate(-45deg) translate(5px, -5px)'
                            : 'rotate(0)',
                    }}
                ></div>
            </div>

            {/* Menu */}
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Nossos Valores</a></li>
                <li><a href="#about">Sobre Nós</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

