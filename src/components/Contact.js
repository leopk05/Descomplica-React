import React from "react";
import "./Contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedinIn, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faArrowsRotate, faEnvelope, faRotate} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
    return (
        <div id="contact">
            <div className="email">
                <p id="stay">Fique por dentro das novidades!</p>
                <div className="button-area">
                    <input type="text" placeholder="Digite seu Email"/>
                    <button>ENVIAR ></button>
                </div>
            </div>
            <footer className="social">
                <div className="left-side">
                    <div className="media-icon">
                        <FontAwesomeIcon className="green-social" icon={faLinkedinIn} size="4x" />
                        <FontAwesomeIcon className="green-social" icon={faFacebook} size="4x" />
                        <FontAwesomeIcon className="green-social" icon={faInstagram} size="4x" />
                    </div>
                    <p>
                        JUNTE-SE A NÓS NAS REDES SOCIAIS
                        PARA DESCOBRIR TUDO O QUE A SQUAD
                        ESTÁ PREPARANDO PARA VOCÊ
                    </p>
                </div>

                <div className="linhaa"></div>
                <div className="help">
                    <h2>FALE CONOSCO</h2>
                    <p>DÚVIDAS SOBRE PRODUTO</p>
                    <div className="contact-texts">
                        <FontAwesomeIcon className="green-social" icon={faArrowsRotate} rotation="90" size="2x"/>
                        <p>TROCA E DEVOLUÇÃO</p>
                    </div>
                    <div className="contact-texts">
                        <FontAwesomeIcon icon={faWhatsapp} className="green-social" size="2x" />
                        <p>11 1234 5678</p>
                    </div>
                    <div className="contact-texts">
                        <FontAwesomeIcon icon={faEnvelope} className="green-social" size="2x" />
                        <p>CONTATO@SQUAD.COM</p>
                    </div>

                </div>


            </footer>
            <div className="rights">
                <p>política de privacidade |termo de uso</p>
            </div>
        </div>
    )
}

export default Contact
