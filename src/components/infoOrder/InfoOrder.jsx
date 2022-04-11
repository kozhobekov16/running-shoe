import React, {useContext} from 'react';
import styles from "./InfoOrder.module.scss";

const InfoOrder = () => {
    return (
        <div className={styles.empty}>
            <div>
                <img src="/images/orderCart.svg" alt="empty"/>
            </div>
            <a
                href=''
                className={styles.return}
            >
                <button>
                    <img src="/images/Left.svg" alt="left"/>
                    Eщё добавить
                </button>
            </a>
        </div>
    );
};

export default InfoOrder;
