import React from "react";
import "./AboutUs.css"
import aboutUs from './images/about-us.png'

export const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="text-area">
                <h2>Quem Somos</h2>
                <div className="border">
                    <p>
                        Bem-vindo a Squad, nossa loja de artigos esportivos, um espaço dedicado aos entusiastas de todas as
                        modalidades, onde a qualidade se une ao preço acessível.
                    </p>
                    <p>
                        Nós somos especializados em oferecer uma curadoria dos melhores produtos esportivos do mercado,
                        buscando sempre trazer aos nossos clientes uma seleção cuidadosa e criteriosa.
                    </p>
                    <p>
                        Aqui, acreditamos que o esporte vai além da competição; é um estilo de vida que inspira, une pessoas e impulsiona conquistas.
                    </p>
                    <p>
                        Estamos entusiasmados em compartilhar nossa paixão pelo esporte com você e
                        ajudá-lo a encontrar os melhores produtos esportivos que se adequem ao seu estilo de vida ativo.
                    </p>
                    <p>
                        Junte-se a nós nessa jornada e descubra a emoção e os benefícios que o esporte pode proporcionar.
                        Sua satisfação é nossa maior motivação.
                    </p>
                </div>
            </div>
            <img src={aboutUs} alt=""/>
        </div>
    )
}

export default AboutUs
