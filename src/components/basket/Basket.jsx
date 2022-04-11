import React, {useContext} from 'react'
import styles from './Basket.module.scss'
import Button from "../../UI/Button/Button";
import AppContext from "../../context";
import {InfoEmpty, InfoOrder} from "../../components";

function Basket() {
    const {closeBasket, card, removeProduct, handleToggleOrder, totalPrice, fivePro} = useContext(AppContext)
    return (
        <div className={styles.basket}>
            {handleToggleOrder ? (
                <InfoOrder/>
            ) : (<div className={styles.basketPlace}>
                <div>
                    <div className={styles.title}>
                        <div>
                            <p>Корзина</p>
                        </div>
                        <div>
                            <img onClick={closeBasket} src="/images/plus.svg" alt="l"/>
                        </div>
                    </div>
                    {card.length > 0 ?
                        <div className={styles.item}>
                            {card.map(cardItem => (
                                <ul key={cardItem.id}>
                                    <li>
                                        <img src={cardItem.img} alt={cardItem.name}/></li>
                                    <li>
                                        <p>{cardItem.name}</p>
                                        <b>{cardItem.price}</b>
                                    </li>
                                    <li>
                                        <img onClick={() => removeProduct(cardItem.id)} src="/images/plus.svg"
                                             alt="plus"/>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        :
                        <InfoEmpty/>
                    }
                </div>
                {
                    card.length > 0
                        ?
                        <div className={styles.order}>
                            <ul>
                                <li>Итого:</li>
                                <li></li>
                                <li>{totalPrice} руб.</li>
                            </ul>
                            <ul>
                                <li>Налог 5%:</li>
                                <li></li>
                                <li>{fivePro} руб.</li>
                            </ul>
                            <Button/>
                        </div>
                        :
                        null
                }
            </div>)}
        </div>
    )
}

export default Basket