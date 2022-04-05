import React, {useState} from 'react'
import styles from './Sneakers.module.scss'
import {Card} from "../../components";

function Sneakers({data, addToBasket, addToChosen}) {
    const [value, setValue] = useState('')
    const changeHandler = e => {
        setValue(e.target.value)
    }
    const search = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    return (
        <div className={styles.sneakers}>
            <div className={`title flex items-center justify-between ${styles.searchBar}`}>
                <strong className="text-3xl">
                    {value ? `Поиск по: ${value}` : 'Все кроссовки'}
                </strong>
                <div>
                    <img src="/images/search.svg" alt="search"/>
                    <input
                        type="text"
                        placeholder="Поиск..."
                        value={value}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-10">
                {search.map(elem => (
                    <div key={elem.id}>
                        <Card
                            elem={elem}
                            addToBasket={addToBasket}
                            addToChosen={addToChosen}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sneakers