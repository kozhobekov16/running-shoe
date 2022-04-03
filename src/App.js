import React from 'react'
import './App.scss';
import {Basket, Header} from "./components";
import axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Chosen, HomePage} from "./pages";

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
        axios.delete(`https://62402a320adaf66ad74a7eba.mockapi.io/inBasket/${id}`)
        setCard(prev => prev.filter(elem => elem.id !== id))
    }

    return (
        <BrowserRouter>
            <div className="App">
                <div className="main">
                    <Header activeOpenBasket={activeOpenBasket}/>
                    <Routes>
                        <Route path='/likes' element={<Chosen/>}/>
                        <Route path='/' element={<HomePage
                            data={data}
                            addToBasket={addToBasket}
                            closeBasket={closeBasket}
                            removeProduct={removeProduct}
                            card={card}
                            activeBasket={activeBasket}
                            setActiveBasket={setActiveBasket}
                        />}/>
                    </Routes>
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
        </BrowserRouter>

    );
}

export default App;
