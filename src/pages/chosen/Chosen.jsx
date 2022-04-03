import React from 'react';
import {NavLink} from 'react-router-dom'
const Chosen = () => {
    return (
        <div>
            <div>
                <NavLink to='/'>
                    <img src="/images/LeftToBack.svg" alt="left"/>
                </NavLink>
                <h1>Мои закладки</h1>
            </div>
            Chosen
        </div>
    );
};

export default Chosen;
