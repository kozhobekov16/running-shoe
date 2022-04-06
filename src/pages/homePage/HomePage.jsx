import React from 'react';
import {Sneakers} from "../../components";

const HomePage = (props) => {
    const {addToBasket, data, loading, addToChosen, card} = props
    return (
        <div>
            <Sneakers
                data={data}
                addToBasket={addToBasket}
                addToChosen={addToChosen}
                loading={loading}
                card={card}
            />
        </div>
    );
};

export default HomePage;
