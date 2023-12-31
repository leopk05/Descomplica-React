import React from 'react'
import logo from './images/Logo.png'
import banner from './images/banner.jpg'
import './HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";





const HomePage = (props) => {

    const changeState = () => {
      props.onChangeState();
    }

    return(
        <div>
            <nav className="navbar">

                <img src={logo} alt="logo-img" />

                <div className="user-cart">

                    <input type="text" placeholder="Buscar" />
                    <FontAwesomeIcon className="user" icon={faUser} size="2x" />
                    <FontAwesomeIcon className="cart" onClick={changeState} icon={faCartShopping} size="2x" />
                </div>
            </nav>

            <hr/>

            <div className="menu">
                <div className="links">
                    <h2 id="produtos"><a href="#prod">Produtos</a></h2>
                    <h2><a href="#about">Quem Somos</a></h2>
                    <h2 id="ajuda"><a href="#contact">Ajuda</a></h2>
                </div>
            </div>
            <img src={banner} className="banner" alt="banner-img"/>

        </div>

    )
}

export default HomePage;