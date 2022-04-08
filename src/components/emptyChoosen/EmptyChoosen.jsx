import React from 'react';
import styles from './EmptyChoosen.module.scss'
import {NavLink} from "react-router-dom";
const EmptyChoosen = () => {
    return (
        <div className="flex flex-col items-center justify-center py-40 text-center">
            <img src="/images/smileLikes.svg" alt="smiles_cry"/>
            <h1>Закладок нет :(</h1>
            <p>Вы ничего не добавляли в закладки</p>
            <NavLink to='/'>
                <button className='relative flex items-center'>
                    <img className="absolute" src="/images/Left.svg" alt="back"/>
                    <p className="pl-6">Вернуться назад</p>
                </button>
            </NavLink>
        </div>
    );
};

export default EmptyChoosen;