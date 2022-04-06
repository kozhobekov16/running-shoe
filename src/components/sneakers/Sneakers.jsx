import React, {useState} from 'react'
import styles from './Sneakers.module.scss'
import {Card} from "../../components";
import ContentLoader from "react-content-loader"

function Sneakers({data, addToBasket, loading, addToChosen, card}) {
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
                        {loading
                            ? (<Card
                                    elem={elem}
                                    addToBasket={addToBasket}
                                    addToChosen={addToChosen}
                                    added={card.find(prev => prev.id === elem.id)}
                                />
                            ) : (
                                <ContentLoader
                                    speed={2}
                                    width={230}
                                    height={260}
                                    viewBox="0 0 150 265"
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#ecebeb"
                                >
                                    <rect x="54" y="17" rx="0" ry="0" width="0" height="155"/>
                                    <rect x="0" y="0" rx="10" ry="10" width="150" height="91"/>
                                    <rect x="0" y="100" rx="3" ry="3" width="150" height="15"/>
                                    <rect x="0" y="120" rx="3" ry="3" width="93" height="15"/>
                                    <rect x="0" y="152" rx="3" ry="3" width="80" height="24"/>
                                    <rect x="117" y="145" rx="10" ry="10" width="32" height="32"/>
                                </ContentLoader>
                            )}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sneakers