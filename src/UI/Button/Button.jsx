import React, {useContext} from 'react'
import './Button.scss'
import AppContext from "../../context";
function Button() {
    const {handleOrder} = useContext(AppContext)
    return(
        <div className="button">
            <button onClick={handleOrder}>
                Оформить заказ
            </button>
        </div>
    )
}
export default Button