import React, {useContext, useState} from 'react'
import styles from './Card.module.scss'
import like from '../../assets/images/liked.svg'
import AppContext from "../../context";

function Card({elem}) {
    const {addToBasket, addToChosen, toggleAddCheck} = useContext(AppContext)

    const activeChecked = () => {
        addToBasket(elem)
    }
    const [heart, setHeart] = useState(like)

    const addToFavorite = () => {
        setHeart(!heart)
        addToChosen(elem)
    }
    return (
        <div className={styles.card}>
            <div className={styles.block}>
                <div className={styles.about}>
                    <img
                        onClick={addToFavorite}
                        src={heart ? "/images/heartUnLike.svg" : '/images/liked.svg'} alt="liked"/>
                    <img src={elem.img} alt="1"/>
                    <p>{elem.name}</p>
                </div>
                <ul className={`${styles.price} p-0 pt-3 flex items-center justify-between`}>
                    <li>
                        <p>Цена:</p>
                        <strong>{elem.price} руб</strong>
                    </li>
                    <li>
                        <img
                            className="w-5"
                            onClick={activeChecked}
                            src={toggleAddCheck(elem.id) ? "/images/checked.svg" : "/images/plus.svg"}
                            alt="plus"
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card