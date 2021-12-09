import { useState} from "react"
import { useDispatch } from "react-redux";
import { updateWallet } from "../../redux/actions/walletActions";
import coinsReducer from "../../redux/reducers/coinsReducer";

export const WalletForm = ({clickedCoin, walletId}) => {
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const re = /^[1-9]\d*(.\d{0,2})?$/
        if (e.target.value === '' || re.test(e.target.value)){
            setAmount(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const total = amount / clickedCoin.current_price;
        const coin = clickedCoin.name.toLowerCase();
        const transaction = {
            id: walletId,
            coin: coin,
            total,
        }

        dispatch(updateWallet(transaction));

    }

    return (
        <div className="wallet-form">
            <form onSubmit={handleSubmit}>
                <label>
                    <h1>Buy {clickedCoin.name}</h1>
                    <label>$</label><input type="text" value={amount} onChange={ e => handleChange(e)}/>
                </label>
                <h1>{amount / clickedCoin.current_price} {clickedCoin.symbol}</h1>
                <div>
                    <button type="submit" >Buy</button>
                </div>
            </form>
        </div>
    )
}

