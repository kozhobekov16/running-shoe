import React from 'react';
import {NavLink} from 'react-router-dom'
const Chosen = () => {
    return (
        <div>
            <div className='flex items-center gap-4 pt-4'>
                <NavLink to='/'>
                    <img
                        src="/images/LeftToBack.svg"
                        alt="left"/>
                </NavLink>
                <h1 className='text-4xl font-bold'>Мои закладки</h1>
            </div>
            Chosen
        </div>
    );
};

export default Chosen;
