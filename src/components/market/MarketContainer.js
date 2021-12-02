import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../../redux/actions/marketActions';
import { CoinRow } from './CoinRow';
import './MarketContainer.css'

export default function MarketContainer() {
    const coins = useSelector(state => state.coins);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoins());
    }, [])

    return (
        <div className="market-container">
            <h1>Market</h1>
                {coins.map(c => { 
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
    );
}
