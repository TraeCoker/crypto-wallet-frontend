import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../../redux/actions/marketActions';
import { CoinRow } from './CoinRow';
import { NavBar } from '../navigation/NavBar';
import { useState } from 'react';
import './MarketContainer.css';

export default function MarketContainer() {
    const coins = useSelector(state => state.coins);
    const dispatch = useDispatch();
    const [sorted, setSorted] = useState(false)

    useEffect(() => {
        console.log("a")
        dispatch(fetchCoins());
        console.log("b")
    }, [])
    //sort button sorts alphabetically
    //same button returns original order
  

    const sortCoins = (x, y) => {
        if(x.name < y.name){return -1}
        if(x.name > y.name){return 1}
        return 0
    }

    const sortedCoins = () => {
         return [...coins].sort(sortCoins)
    }
    
    const handleSort = () => setSorted(!sorted)

    const coinSelect = () => sorted ? sortedCoins() : coins 

    return (
        <>
        <NavBar/>
        <div className="market-container">
        <button onClick={() => console.log(handleSort())}>Sort</button>
            <h1>Market</h1>
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
