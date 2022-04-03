import React from 'react'
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom'

function Header({activeOpenBasket}) {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex items-center">
                <div>
                    <NavLink to='/'>
                        <img
                            src="/images/logo.svg"
                            alt="logo"
                            className="mr-2"
                        />
                    </NavLink>
                </div>
                <div>
                    <strong className="uppercase">Online Store Sneakers</strong>
                    <p className="text-slate-800 text-sm">Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className={`flex gap-2 items-center ${styles.basketCard}`}>
                    <span>
                        <img onClick={activeOpenBasket} src="/images/basket.svg" alt="basket"/>
                    </span>
                    <span>
                        <p className="text-sm">1205 руб.</p>
                    </span>
                </div>
                <ul className="p-0 flex gap-2">
                    <li>
                        <NavLink to='/likes'>
                            <img src="/images/heartUnLike.svg" alt="heart"/>
                        </NavLink>
                    </li>
                    <li>
                        <img src="/images/user.svg" alt="user"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header