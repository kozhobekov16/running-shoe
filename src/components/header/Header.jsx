import React, {useContext} from 'react'
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom'
import AppContext from "../../context";

function Header() {
    const {activeOpenBasket, totalPrice} = useContext(AppContext)
    return (
        <div>
            <div className='flex justify-between items-center'>
                <NavLink to='/'>
                    <div className="flex items-center">
                        <div>
                            <img
                                src="/images/logo.svg"
                                alt="logo"
                                className="mr-2"
                            />
                        </div>
                        <div>
                            <strong className="uppercase">Online Store Sneakers</strong>
                            <p className="text-slate-800 text-sm">Магазин лучших кроссовок</p>
                        </div>
                    </div>
                </NavLink>
                <div className='flex items-center gap-4'>
                    <div className={`flex gap-4 items-center ${styles.basketCard}`}>
                    <span>
                        <img onClick={activeOpenBasket} src="/images/basket.svg" alt="basket"/>
                    </span>
                        <span>
                            <p className="text-sm">{totalPrice} руб.</p>
                        </span>
                    </div>
                    <ul className="p-0 flex gap-4">
                        <li>
                            <NavLink to='/likes'>
                                <img
                                    src="/images/heartUnLike.svg"
                                    alt="heart"
                                    className={styles.heart}
                                />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className='mt-8'/>
        </div>

    )
}

export default Header