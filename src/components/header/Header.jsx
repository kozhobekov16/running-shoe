import React from 'react'

function Header() {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex items-center">
                <div>
                    <img src="/images/logo.svg" alt="logo" className="mr-2"/>
                </div>
                <div>
                    <strong className="uppercase">Online Store Sneakers</strong>
                    <p className="text-slate-800 text-sm">Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className="flex gap-2 items-center">
                    <span>
                        <img src="/images/basket.svg" alt="basket"/>
                    </span>
                    <span>
                        <p className="text-sm">1205 руб.</p>
                    </span>
                </div>
                <ul className="p-0 flex gap-2">
                    <li>
                        <img src="/images/heartUnLike.svg" alt="heart"/>
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