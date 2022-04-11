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
    const removeProduct = async (id) => {
        try {
            setCard(prev => prev.filter(elem => elem.id !== id))
            await axios.delete(`https://62402a320adaf66ad74a7eba.mockapi.io/inBasket/${id}`)
        }
        catch {
            alert('Ошибка при удалении')
        }
    }

    const handleUnliked = async (id) => {
        try {
            setLikeCard(prev => prev.filter(item => item.id !== id))
            await axios.delete(`https://62402a320adaf66ad74a7eba.mockapi.io/likes/${id}`)
        }
        catch {
            alert('Ошибка при удалении')
        }
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

    const totalPrice = card.reduce((total, totalPrice) => {
        return total + totalPrice.price
    }, 0)

    const fivePro = Math.trunc(totalPrice / 100 * 5)

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
                totalPrice,
                fivePro
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
