import React, {useState} from "react";
import "./ItemOnCart.css"
export const ItemOnCart = (props) => {


    const [value, setValue] = useState(1);


    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const onRemoveItem = () => {
        props.removeItem(props.id);
    }

    return (
        <div className="onCartItem">
            <img src={props.imgItem} alt=""/>
            <p>{props.title}</p>
            <p>R$ {props.price}</p>
            <input type="number" min={0} value={value} onChange={changeValue}/>
            <button onClick={onRemoveItem}>Remover</button>
        </div>
    )
}

export default ItemOnCart
