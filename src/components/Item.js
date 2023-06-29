import React from "react";
import './Item.css';
import Button from "./Button";

export const Item = (props) => {
    return (
       <div className="card-body">
           <img src={props.imgSrc} alt=""/>
            <h3>{props.title}</h3>
            <h4>R$ {props.price}</h4>
            <Button>Adicionar ao Carrinho</Button>
       </div>
    )
}

export default Item;