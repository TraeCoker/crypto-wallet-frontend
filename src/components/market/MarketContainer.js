import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../../redux/actions/marketActions';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { CoinRow } from './CoinRow';
import { NavBar } from '../navigation/NavBar';
import { useState } from 'react';
import './MarketContainer.css';

export default function MarketContainer() {
    const coins = useSelector(state => state.coins);
    const dispatch = useDispatch();
    const [sorted, setSorted] = useState(false)
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        dispatch(fetchCoins());
    }, [])

  
    const sortCoins = (x, y) => {
        if(x.name < y.name){return -1}
        if(x.name > y.name){return 1}
        return 0
    }

    const sortedCoins = () => {
         return [...coins].sort(sortCoins)
    }
    
    const handleSort = () => setSorted(!sorted)

    const sortSelect = () => sorted ? sortedCoins() : coins 

    const coinSelect = () => sortSelect().filter(c => c.name.toLowerCase().includes(searchInput.toLowerCase()))

    return (
        <>
        <NavBar/>
        <div className="market-container">
            <h1>Market</h1>
            <Button onClick={() => handleSort()}>{sorted ? "Rank Sort" : "A-Z Sort"}</Button>
            <input size="lg" type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                {coinSelect().map(c => { 
                    return <CoinRow 
                            key={c.id} 
                            name={c.name}
                            symbol={c.symbol}
                            rank={c.market_cap_rank}
                            price={c.current_price}
                            image={c.image}
                            volume={c.total_volume}
                            marketcap={c.market_cap}
                            priceChange={c.price_change_percentage_24h}
                        /> 
                    }
                )}
        </div>
        </>
    );
}
