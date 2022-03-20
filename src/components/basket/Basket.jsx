import React from 'react'
import styles from './Basket.module.scss'
function Basket() {
    return(
        <div className={styles.basket}>
            <div>
                <p>Корзина</p>
            </div>
            <div className={styles.item}>
                <ul>
                    <li><img src="/images/1.jpg" alt="one"/></li>
                    <li>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </li>
                    <li>
                        <img src="/images/plus.svg" alt="l"/>
                    </li>
                </ul>
            </div>
            <div className={styles.order}>
                <ul>
                    <li>Итого: </li>
                    <li></li>
                    <li>21 498 руб. </li>
                </ul>
                <ul>
                    <li>Налог 5%: </li>
                    <li></li>
                    <li>1074 руб.  </li>
                </ul>
                <button className={styles.btn}>Оформить заказ</button>
            </div>

        </div>
    )
}
export default Basket