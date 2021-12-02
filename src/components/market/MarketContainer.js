import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../../redux/actions/marketActions';

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
                {coins.map(c => <li key={c.id}><img src={c.image}/>{c.name} -  ${c.current_price}</li>)}
            </ol>
        </div>
    );
}
