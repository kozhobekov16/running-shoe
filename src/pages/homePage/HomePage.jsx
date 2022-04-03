import React from 'react';
import {Basket, Sneakers} from "../../components";

const HomePage = (props) => {
    const {addToBasket, closeBasket, removeProduct, card, data, activeBasket, setActiveBasket} = props
    return (
        <div>
            <Sneakers data={data} addToBasket={addToBasket}/>
            <div className={activeBasket ? 'basket' : 'noneBasket'}>
                <div className="basketChild">
                    <Basket
                        setActiveBasket={setActiveBasket}
                        activeBasket={activeBasket}
                        closeBasket={closeBasket}
                        card={card}
                        removeProduct={removeProduct}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
