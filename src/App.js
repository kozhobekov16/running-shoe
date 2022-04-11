import React, {useState} from 'react'
import './App.scss';
import {Basket, Card, Header} from "./components";
import axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Chosen, HomePage} from "./pages";
import AppContext from "./context";

function App() {
    const [data, setData] = React.useState([])
    const [card, setCard] = React.useState([])
    const [likeCard, setLikeCard] = useState([])
    const [loading, setLoading] = useState(false)
    const [handleToggleOrder, setHandleToggleOrder] = useState(false)

    React.useEffect(() => {
        axios.get('https://62402a320adaf66ad74a7eba.mockapi.io/sneakers')
            .then(resp => setData(resp.data))
        axios.get('https://62402a320adaf66ad74a7eba.mockapi.io/inBasket')
            .then(data => setCard(data.data))
        axios.get('https://62402a320adaf66ad74a7eba.mockapi.io/likes')
            .then(response => setLikeCard(response.data))
        setTimeout(() => {
            setLoading(true)
        }, 1000)
    }, [])

    const [activeBasket, setActiveBasket] = React.useState(false)

    const addToBasket = async (elem) => {
        try {
            if (card.find(prod => Number(prod.id) === Number(elem.id))) {
                setCard(item => item.filter(item => Number(item.id) !== Number(elem.id)))
                axios.delete(`https://62402a320adaf66ad74a7eba.mockapi.io/inBasket/${elem.id}`)
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

    const toggleAddCheck = (id) => {
        return card.find(prev => Number(prev.id) === Number(id))
    }

    const handleOrder = () => {
        setCard([])
        setHandleToggleOrder(true)
    }

    const totalPrice = card.reduce((name, obj) => obj.price + name, 0)

    const addToChosen = async (elem) => {
        try {
            if (likeCard.find(item => Number(item.id) === Number(elem.id))) {
                setLikeCard(prev => prev.filter(thing => Number(thing.id) !== Number(elem.id)))
                handleUnliked()
            } else {
                await axios.post('https://62402a320adaf66ad74a7eba.mockapi.io/likes', elem)
                setLikeCard([...likeCard, elem])
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <AppContext.Provider
            value={{
                likeCard,
                addToBasket,
                handleUnliked,
                data,
                closeBasket,
                card,
                activeBasket,
                setActiveBasket,
                addToChosen,
                loading,
                removeProduct,
                activeOpenBasket,
                toggleAddCheck,
                handleOrder,
                handleToggleOrder,
                totalPrice
            }}>
            <BrowserRouter>
                <div className="App">
                    <div className="main">
                        <Header/>
                        <Routes>
                            <Route path='/likes' element={<Chosen/>}/>
                            <Route path='/' element={<HomePage/>}/>
                        </Routes>
                        <div className={activeBasket ? 'basket' : 'noneBasket'}>
                            <div className="basketChild">
                                <Basket/>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </AppContext.Provider>

    );
}

export default App;
