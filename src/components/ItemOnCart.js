import React from "react";
import "./ItemOnCart.css"
import Button from "./Button";
export const ItemOnCart = (props) => {
    return (
        <div className="onCartItem">
            <img src={props.imgItem} alt=""/>
            <p>{props.title}</p>
            <p>R$ {props.price.toFixed(2)}</p>
            <div className="qty">
                <label>Qty</label>
                <input type="number"/>
            </div>

            <Button onClick={() => console.log("teste")} >Remover</Button>
        </div>
    )
}

export default ItemOnCart
