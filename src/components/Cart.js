import React from "react";
import "./Cart.css"
import ItemOnCart from "./ItemOnCart";

export const Cart = (props) => {
    let total = 0;
    props.onCart.forEach(item => total += (item.quantity * item.price))

    const getItemToRemove = (id) => {
        props.toRemoveItem(id)
    }


    if(props.onCart.length === 0){
        return (
            <div className="cart-panel">
                <h1>Sem item no carrinho</h1>
                <button onClick={props.closeCart}>Fechar</button>
            </div>
        )
    } else{
        return(
            <div className="cart-panel">

                <h1>No Seu Carrinho</h1>
                <div className="header">
                    <p>Nome</p>
                    <p>Preço</p>
                    <p className="qty">quantidade</p>
                </div>
                {props.onCart.map(item => (
                    <ItemOnCart removeItem={getItemToRemove} key={item.id} quantity={item.quantity} id={item.id} imgItem={item.image} title={item.title} price={item.price}/>
                ))}
                <div className="bot">
                    <p>Valor Total R$ {total}</p>
                    <button>Checkout</button>
                    <button onClick={props.closeCart}>Fechar</button>
                </div>

            </div>

        )
    }
}

export default Cart
