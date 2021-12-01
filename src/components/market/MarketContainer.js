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
        {console.log(coins)}
            <h1>Market</h1>
        </div>
    );
}
