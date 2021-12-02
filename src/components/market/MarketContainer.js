import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../../redux/actions/marketActions';
import { CoinRow } from './CoinRow';

export default function MarketContainer() {
    const coins = useSelector(state => state.coins);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoins());
    }, [])

    return (
        <div>
            <h1>Market</h1>
            <ol>
                {coins.map(c => { 
                    return <CoinRow 
                            key={c.id} 
                            name={c.name}
                            symbol={c.symbol}
                            price={c.current_price}
                            image={c.image}
                            marketcap={c.market_cap}
                            priceChange={c.price_change_percentage_24h}
                        /> 
                    }
                )}
            </ol>
        </div>
    );
}
