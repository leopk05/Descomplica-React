import React, {useState} from "react";
import "./Cart.css"
import ItemOnCart from "./ItemOnCart";
import Button from "./Button";

export const Cart = (props) => {


    const [testes, setTestes] = useState("valo 4");

    console.log(testes)
    const changeTeste = () => {
        setTestes("valo 5")
    }

    if(props.onCart.length === 0){
        return (
            <div className="cart-panel">
                <h1>Sem item no carrinho</h1>
                <Button onClick={props.closeCart}>Fechar</Button>
            </div>
        )
    } else{
        return(
            <div className="cart-panel">
                <h1>No Seu Carrinho</h1>
                <ItemOnCart imgItem={props.onCart[0].image} title={props.onCart[0].title} price={props.onCart[0].price}/>
                <ItemOnCart imgItem={props.onCart[1].image} title={props.onCart[1].title} price={props.onCart[1].price}/>
                <Button onClick={changeTeste}>Fechar</Button>
            </div>

        )
    }
}

export default Cart
