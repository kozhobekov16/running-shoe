import React, {useState} from 'react'
import './App.scss';
import {Basket, Header} from "./components";
import axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Chosen, HomePage} from "./pages";

function App() {
    const [data, setData] = React.useState([])
    const [card, setCard] = React.useState([])
    const [likeCard, setLikeCard] = useState([])

    React.useEffect(() => {
        axios.get('https://62402a320adaf66ad74a7eba.mockapi.io/sneakers')
            .then(resp => setData(resp.data))
        axios.get('https://62402a320adaf66ad74a7eba.mockapi.io/inBasket')
            .then(data => setCard(data.data))
        axios.get('https://62402a320adaf66ad74a7eba.mockapi.io/likes')
            .then(response => setLikeCard(response.data))
    }, [])

    const [activeBasket, setActiveBasket] = React.useState(false)

    const addToBasket = async (elem) => {
        try {
            if (card.find(prod => prod.id === elem.id)) {
                setCard(item => item.filter(item => item.id !== elem.id))
            } else {
                await axios.post('https://62402a320adaf66ad74a7eba.mockapi.io/inBasket', elem)
                setCard([...card, elem])
            }
        } catch (e) {
            console.log(e)
        }
    }
    const removeProduct = (id) => {
        axios.delete(`https://62402a320adaf66ad74a7eba.mockapi.io/inBasket/${id}`)
        setCard(prev => prev.filter(elem => elem.id !== id))
    }

    const handleUnliked = (id) => {
        axios.delete(`https://62402a320adaf66ad74a7eba.mockapi.io/likes/${id}`)
        setLikeCard(prev => prev.filter(item => item.id !== id))
    }

    const activeOpenBasket = () => {
        setActiveBasket(!activeBasket)
    }

    const closeBasket = () => {
        setActiveBasket(false)
    }
    const addToChosen = async (elem) => {
        try {
            if (likeCard.find(item => item.id === elem.id)) {
                setLikeCard(prev => prev.filter(thing => thing.id !== elem.id))
            } else {
                await axios.post('https://62402a320adaf66ad74a7eba.mockapi.io/likes', elem)
                setLikeCard([...likeCard, elem])
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <BrowserRouter>
            <div className="App">
                <div className="main">
                    <Header activeOpenBasket={activeOpenBasket}/>
                    <Routes>
                        <Route path='/likes'
                               element={<Chosen
                                   data={data}
                                   likeCard={likeCard}
                                   data={data}
                                   setLikeCard={setLikeCard}
                                   addToBasket={addToBasket}
                                   handleUnliked={handleUnliked}
                               />}/>
                        <Route
                            path='/'
                            element={
                                <HomePage
                                    data={data}
                                    addToBasket={addToBasket}
                                    closeBasket={closeBasket}
                                    card={card}
                                    activeBasket={activeBasket}
                                    setActiveBasket={setActiveBasket}
                                    addToChosen={addToChosen}
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
