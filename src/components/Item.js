import React, {useState} from "react";
import './Item.css';

export const Item = (props) => {


    const [state, setState] = useState(false);

    const [msg, setMsg] = useState("Adicionar ao Carrinho");
    const upItem = () => {
        props.toCart(props.id)
        setState(true)
        setMsg("Adicionado")
    }

    const clicked = () => {
        setState(true)
        setMsg("Adicionado")
    }

    const originalState = () =>{
        setState(false)
        setMsg("Adicionar ao Carrinho")
    }

    return (
       <div className="card-body">
           <img src={props.imgSrc} alt="item"/>
            <h3>{props.title}</h3>
            <h4>R$ {props.price}</h4>
            <button onClick={upItem} className={state? "unable": "able"} disabled={state}>{msg}</button>
       </div>
    )
}

export default Item;