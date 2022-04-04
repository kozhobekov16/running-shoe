import React from 'react'
import styles from './Basket.module.scss'
import Button from "../../UI/Button/Button";

function Basket({closeBasket, card, removeProduct}) {
    return (
        <div className={styles.basket}>
            <div className={styles.basketPlace}>
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
                                        <img onClick={() => removeProduct(cardItem.id)} src="/images/plus.svg" alt="l"/>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        : <div className={styles.empty}>
                            <div>
                                <img src='/images/basketEmpty.png' alt="empty"/>
                            </div>
                            <div
                                className={styles.return}
                                onClick={closeBasket}
                            >
                                <img src="/images/Left.svg" alt=""/>
                                <button>
                                    Вернуться назад
                                </button>
                            </div>
                        </div>
                    }
                </div>
                {
                    card.length > 0
                        ?
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
                        :
                        null
                }
            </div>

        </div>
    )
}

export default Basket