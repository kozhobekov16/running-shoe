import React, {useContext} from 'react';
import styles from "./Info.module.scss";
import AppContext from "../../context";

const InfoEmpty = () => {
    const {closeBasket} = useContext(AppContext)
    return (
        <div className={styles.empty}>
            <div>
                <img src="/images/basketEmpty.png" alt="empty"/>
            </div>
            <div
                className={styles.return}
                onClick={closeBasket}
            >
                <button>
                    <img src="/images/Left.svg" alt="left"/>
                    Вернуться назад
                </button>
            </div>
        </div>
    );
};

export default InfoEmpty;
