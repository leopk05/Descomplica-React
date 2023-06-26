import React from "react";
import './Item.css';

export const Item = (props) => {
    return (
       <div className="card-body">
           <img src={props.imgSrc} alt=""/>
            <h3>{props.title}</h3>
            <h4>R$ {props.price}</h4>
            <button>Adicionar ao Carrinho</button>
       </div>
    )
}

export default Item;