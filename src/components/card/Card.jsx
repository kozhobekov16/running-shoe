import React from 'react'
import styles from './Card.module.scss'

function Card({elem, addToBasket}) {
    const [isAdded, setIsAdded] = React.useState(false)
    const activeChecked = () => {
        addToBasket(elem)
        setIsAdded(!isAdded)
    }
    return (
        <div className={styles.card}>
            <div className={styles.block}>
                <div className={styles.about}>
                    <img src="/images/heartUnLike.svg" alt="liked"/>
                    <img src={elem.img} alt="1"/>
                    <p>{elem.name}</p>
                </div>
                <ul className={`${styles.price} p-0 pt-3 flex items-center justify-between`}>
                    <li>
                        <p>Цена:</p>
                        <strong>{elem.price}</strong>
                    </li>
                    <li>
                        <img
                            className="w-5"
                            onClick={activeChecked}
                            src={!isAdded ? "/images/plus.svg" : "/images/checked.svg"}
                            alt="plus"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card