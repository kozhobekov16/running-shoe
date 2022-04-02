import React from 'react'
import './App.scss';
import {Basket, Header, Sneakers} from "./components";
import axios from "axios";

function App() {
    const [data, setData] = React.useState([])
    const [card, setCard] = React.useState([])
    React.useEffect(() => {
        axios.get('https://62402a320adaf66ad74a7eba.mockapi.io/sneakers')
            .then(resp => setData(resp.data))
        axios.get('https://62402a320adaf66ad74a7eba.mockapi.io/inBasket')
            .then(data => setCard(data.data))
    }, [])
    const [activeBasket, setActiveBasket] = React.useState(false)

    const addToBasket = (elem) => {
        axios.post('https://62402a320adaf66ad74a7eba.mockapi.io/inBasket', elem)
        setCard([...card, elem])
    }
    const activeOpenBasket = () => {
        setActiveBasket(!activeBasket)
    }
    const closeBasket = () => {
        setActiveBasket(false)
    }

    const removeProduct = (id) => {
        setCard(prev => prev.filter(elem => elem.id !== id))
    }
    return (
        <div className="App">
            <div className="main">
                <Header activeOpenBasket={activeOpenBasket}/>
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
        </div>
    );
}

export default App;
