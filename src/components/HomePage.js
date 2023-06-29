import React from 'react'
import logo from './images/Logo.png'
import banner from './images/banner.jpg'
import './HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";



const HomePage = (props) => {

    const changeState = () => {
      props.onChangeState();
    }

    return(
        <div>
            <nav className="navbar">

                <img src={logo} alt="logo-img"/>

                <div className="user-cart">
                    <FontAwesomeIcon className="user" icon={faUser} size="2x"/>
                    <FontAwesomeIcon className="cart" onClick={changeState} icon={faCartShopping} size="2x"/>
                </div>
            </nav>

            <hr/>

            <div className="menu">
                <div className="item">
                    <h2 id="produtos"> Produtos</h2>
                    <h2>Quem Somos</h2>
                    <h2 id="ajuda">Ajuda</h2>
                </div>
            </div>
            <img src={banner} className="banner" alt="banner-img"/>

        </div>

    )
}

export default HomePage;