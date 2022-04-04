import React from 'react';
import {Sneakers} from "../../components";

const HomePage = (props) => {
    const {addToBasket, data} = props
    return (
        <div>
            <Sneakers data={data} addToBasket={addToBasket}/>
        </div>
    );
};

export default HomePage;
