import React from 'react';
import {Sneakers} from "../../components";

const HomePage = (props) => {
    const {addToBasket, data, addToChosen} = props
    return (
        <div>
            <Sneakers
                data={data}
                addToBasket={addToBasket}
                addToChosen={addToChosen}
            />
        </div>
    );
};

export default HomePage;
