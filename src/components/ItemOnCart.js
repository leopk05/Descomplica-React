import React, {useState} from "react";
import "./ItemOnCart.css"
export const ItemOnCart = (props) => {

    const [value, setValue] = useState(props.quantity);


    const changeValueUp = () => {
        setValue(value+1, () => console.log("teste"))

        props.newQuantityHandle(value +1, props.id)
    }

    const changeValueDown = () => {

        if (value > 0){
            setValue(value-1, () => console.log("teste"))
        }
        console.log(value)


        props.newQuantityHandle(value -1, props.id)
    }

    const onRemoveItem = () => {
        props.removeItem(props.id);
    }

    return (
        <div className="onCartItem">
            <img src={props.imgItem} alt=""/>
            <p>{props.title}</p>
            <p>R$ {props.price.toFixed(2)}</p>
            <div className="quantity-display">
                <button onClick={changeValueDown} disabled={value === 1}>-</button>
                <p>{value}</p>
                <button onClick={changeValueUp}>+</button>

            </div>
            <button onClick={onRemoveItem}>Remover</button>
        </div>
    )
}

export default ItemOnCart


