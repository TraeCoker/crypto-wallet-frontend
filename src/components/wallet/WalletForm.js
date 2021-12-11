import { useState} from "react"
import { useDispatch } from "react-redux";
import { updateWallet } from "../../redux/actions/walletActions";
import coinsReducer from "../../redux/reducers/coinsReducer";

export const WalletForm = ({clickedCoin, walletId, handleClose}) => {
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('Buy')
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
        setAmount('');
        handleClose(false);
    }

    return (
        <div className="wallet-form">
            <form onSubmit={handleSubmit}>
                <label>
                <button type="button" onClick={() => setTransactionType('Sell')}>Sell</button>
                <button type="button" onClick={() => setTransactionType('Buy')}>Buy</button>
                    <h1>{transactionType} {clickedCoin.name}</h1>
                    <label>$</label><input type="text" value={amount} onChange={ e => handleChange(e)}/>
                </label>
                <h1>{amount / clickedCoin.current_price} {clickedCoin.symbol}</h1>
                <div>
                    <button type="submit" >Submit Transaction</button>
                </div>
            </form>
        </div>
    )
}

