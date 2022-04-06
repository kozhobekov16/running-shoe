import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import ChoosenCard from "../../components/choosenCard/ChoosenCard";

const Chosen = (props) => {
    const {likeCard, addToBasket, handleUnliked} = props

    return (
        <div>
            <div className='flex items-center gap-4 pt-4'>
                <NavLink to='/' className='flex gap-4 items-center'>
                    <img
                        src="/images/LeftToBack.svg"
                        alt="left"/>
                    <strong className='text-2xl'>Мои закладки</strong>
                </NavLink>
            </div>
            <div className='flex flex-wrap gap-4'>
                {likeCard.map(elem => (
                    <div key={elem.id}>
                        <ChoosenCard
                            key={elem.id}
                            elem={elem}
                            likeCard={likeCard}
                            handleUnliked={handleUnliked}
                            addToBasket={addToBasket}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chosen;
