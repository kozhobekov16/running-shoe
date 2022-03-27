import React from 'react'
import styles from './Sneakers.module.scss'
import {Card} from "../../components";

function Sneakers({data, addToBasket}) {
    return (
        <div className={styles.sneakers}>
            <div className={`title flex items-center justify-between ${styles.searchBar}`}>
                <strong className="text-3xl">Все кроссовки</strong>
                <div>
                    <img src="/images/search.svg" alt="search"/>
                    <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-10">
                {data.map(elem => (
                    <div key={elem.id}>
                        <Card elem={elem} addToBasket={addToBasket}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sneakers