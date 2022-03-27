import React from 'react'
import styles from './Basket.module.scss'
import Button from "../../UI/Button/Button";

function Basket({closeBasket, card}) {
    return (
        <div className={styles.basket}>
            <div>
                <div className={styles.title}>
                    <div>
                        <p>Корзина</p>
                    </div>
                    <div>
                        <img onClick={closeBasket} src="/images/plus.svg" alt="l"/>
                    </div>
                </div>
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
                                <img src="/images/plus.svg" alt="l"/>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className={styles.order}>
                <ul>
                    <li>Итого:</li>
                    <li></li>
                    <li>21 498 руб.</li>
                </ul>
                <ul>
                    <li>Налог 5%:</li>
                    <li></li>
                    <li>1074 руб.</li>
                </ul>
                <Button/>
            </div>

        </div>
    )
}

export default Basket