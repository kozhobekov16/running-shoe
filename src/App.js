import React from 'react'
import './App.scss';
import {Basket, Header, Sneakers} from "./components";

function App() {
    const [activeBasket, setActiveBasket] = React.useState(false)
    const activeOpenBasket = () => {
        setActiveBasket(!activeBasket)
    }
    return (
        <div className="App">
            <div className="main">
                <Header activeOpenBasket={activeOpenBasket}/>
                <Sneakers/>
                {activeBasket && <div className="basket">
                    <div className="basketChild">
                        <Basket setActiveBasket={setActiveBasket}/>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default App;
