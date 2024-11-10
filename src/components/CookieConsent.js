// src/components/CookieConsent.js
import React, { useState } from 'react';
import './CookieConsent.css'; // Arquivo de estilo para o banner

function CookieConsent() {
    const [isAccepted, setIsAccepted] = useState(false);

    // Função que define o estado do consentimento como aceito
    const handleAccept = () => {
        setIsAccepted(true);
        localStorage.setItem('cookieConsent', 'true'); // Salva o consentimento no localStorage
    };

    // Se o consentimento já foi dado, não exibe o banner
    if (isAccepted || localStorage.getItem('cookieConsent') === 'true') {
        return null;
    }

    return (
        <div className="cookie-consent-banner">
            <div className="cookie-consent-content">
                <p>
                    Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com a nossa
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> política de privacidade</a>.
                </p>
                <button onClick={handleAccept} className="accept-button">Aceitar</button>
            </div>
        </div>
    );
}

export default CookieConsent;
