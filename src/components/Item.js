import React, {useState} from "react";
import './Item.css';

export const Item = (props) => {


    let state = false;


    const upItem = () => {
        props.toCart(props.id)
    }

    for (let i = 0; i< props.idToRemoveHandle.length; i++){
        if (props.idToRemoveHandle[i].id === props.id){
            state = true;
        }
    }




    return (
       <div className="card-body">
           <img src={props.imgSrc} alt="item"/>
            <h3>{props.title}</h3>
            <h4>R$ {props.price.toFixed(2)}</h4>
            <button onClick={upItem} className={state? "unable": "able"} disabled={state}>{state? "Adicionado" : "Adicionar ao Carrinho"}</button>
       </div>
    )
}

export default Item;