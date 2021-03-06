import { useState} from "react";
import { useDispatch} from "react-redux";
import { updateWallet } from "../../redux/actions/walletActions";
import { Button, Form } from "react-bootstrap";

export const WalletForm = ({clickedCoin, wallet, handleClose, coins}) => {
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('Buy');
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        
        const re = /^[1-9]\d*(.\d{0,2})?$/
        if (e.target.value === '' || re.test(e.target.value)){
            if (transactionType === 'Sell'){
                const coin = clickedCoin.name.toLowerCase();
                const currentTotal = e.target.value / clickedCoin.current_price
                console.log(coin)
                console.log(currentTotal)
                console.log(e.target.value)
                if (wallet[coin] - currentTotal >= 0){
                    setAmount(e.target.value);
                };
            } else {
                setAmount(e.target.value);
            };
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const coin = clickedCoin.name.toLowerCase();
        let total = 0
        checked ? total = parseFloat(wallet[clickedCoin.name.toLowerCase()]) : total = amount / clickedCoin.current_price;
        const transaction = {
            id: wallet.id,
            coin: coin,
            transaction_type: transactionType,
            total,
        }

        dispatch(updateWallet(transaction, coins));
        setAmount('');
        handleClose(false);
    };

    const determineValue = () => checked ? (wallet[clickedCoin.name.toLowerCase()] * clickedCoin.current_price).toFixed(2) : amount;

    return (
        <div className="wallet-form">
            <form onSubmit={handleSubmit}>
                <label>

                <Button variant="dark" type="Button" 
                onClick={() => { 
                    setTransactionType('Sell')
                    setAmount('')
                    setChecked(false)
                }}>Sell</Button>

                <Button variant="dark" type="Button" 
                onClick={() => {
                    setTransactionType('Buy')
                    setAmount('')
                    setChecked(false)
                }}>Buy</Button>

                    <h1>{transactionType} {clickedCoin.name}</h1>
                    <label>$</label><input type="text" value={determineValue()} onChange={ e => handleChange(e)}/>
                    {transactionType === "Sell"?  
                        <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                        label="Select to sell all current holdings"
                        /> : null}
                </label>
                <h1>{checked ?  wallet[clickedCoin.name.toLowerCase()] : amount / clickedCoin.current_price} {clickedCoin.symbol}</h1>
                <div>
                    <Button variant="success"  type="submit" >Submit Transaction</Button>
                </div>
            </form>
        </div>
    );
};
