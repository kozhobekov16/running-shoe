import React, {useContext, useState} from 'react';
import styles from "./ChoosenCard.module.scss";
import like from '../../assets/images/liked.svg'
import AppContext from "../../context";
const ChoosenCard = ({elem}) => {
    const {handleUnliked, addToBasket} = useContext(AppContext)
    const [heart, setHeart] = useState(like)
    const [checked, setChecked] = useState(false)
    const handleToBasket = () => {
        setChecked(!checked)
        addToBasket(elem)
    }
    const addToFavorite = (id) => {
        setHeart(!heart)
        handleUnliked(id)
    }
    return (
        <div>
            <div key={`${elem.id}_${elem.name}`}>
                <div>
                    <div className={styles.card}>
                        <div className={styles.block}>
                            <div className={styles.about}>
                                <img
                                    onClick={() => addToFavorite(elem.id)}
                                    src={
                                        !heart
                                            ? "/images/heartUnLike.svg"
                                            : "/images/liked.svg"
                                    }
                                    alt="liked"
                                />
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
                                        onClick={handleToBasket}
                                        className="w-5"
                                        src={!checked ? "/images/plus.svg" : "/images/checked.svg"}
                                        alt="plus"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosenCard;