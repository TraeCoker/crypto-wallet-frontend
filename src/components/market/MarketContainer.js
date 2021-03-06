import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../../redux/actions/marketActions';
import { Button} from 'react-bootstrap';
import { CoinRow } from './CoinRow';
import { NavBar } from '../navigation/NavBar';
import { useState } from 'react';
import { Navigate } from 'react-router';
import './MarketContainer.css';

export default function MarketContainer() {
    const coins = useSelector(state => state.coins);
    const error = useSelector(state => state.coins.fetch_error)
    const dispatch = useDispatch();
    const [sorted, setSorted] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        dispatch(fetchCoins());
    }, []);

    if (error) {
        return <Navigate from="/market" to="/" />
    };
  
    const sortCoins = (x, y) => {
        if(x.name < y.name){return -1}
        if(x.name > y.name){return 1}
        return 0
    };

    const sortedCoins = () => {
         return [...coins].sort(sortCoins)
    };
    
    const handleSort = () => setSorted(!sorted);

    const sortSelect = () => sorted ? sortedCoins() : coins ;

    const coinSelect = () => sortSelect().filter(c => c.name.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <>
        <NavBar/>
        <div className="market-container">

            <h1>Market</h1>
            <Button className="sort-button" size="sm" onClick={() => handleSort()}>{sorted ? "Rank Sort" : "A-Z Sort"}</Button>
            <input className="search" size="lg" type="text" placeholder="Search" 
                   value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>

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
};