import React from 'react'
import './App.scss';
import {Basket, Header, Sneakers} from "./components";

function App() {
    const [data, setData] = React.useState([])
    const [card, setCard] = React.useState([
        {
            "name": "Мужские Кроссовки Nike Blazer Mid Suede",
            "img": "/images/sneakers/image 1.jpg",
            "id": "1",
            "price": "12 999 руб."
        }
    ])
    React.useEffect(() => {
        fetch('https://62402a320adaf66ad74a7eba.mockapi.io/sneakers')
            .then(resp => resp.json())
            .then(data => setData(data))
    }, [])
    const [activeBasket, setActiveBasket] = React.useState(false)
    const activeOpenBasket = () => {
        setActiveBasket(!activeBasket)
    }
    const closeBasket = () => {
        setActiveBasket(false)
    }
    const addToBasket = (elem) => {
        setCard([...card, elem])
    }
    console.log(card)
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
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
