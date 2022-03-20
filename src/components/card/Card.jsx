import React from 'react'
import styles from './Card.module.scss'
function Card() {
    return(
        <div className={styles.card}>
            <div className={styles.block}>
                <div className={styles.about}>
                    <img src="/images/heartUnLike.svg" alt="liked"/>
                    <img src="/images/1.jpg" alt="1"/>
                    <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                </div>
                <ul className={`${styles.price} p-0 pt-3 flex items-center justify-between`}>
                    <li>
                        <p>Цена:</p>
                        <strong>12 999 руб.</strong>
                    </li>
                    <li>
                        <img className="w-5" src="/images/plus.svg" alt="plus"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Card