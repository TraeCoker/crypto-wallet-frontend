import './WalletRow.css'
import Button from 'react-bootstrap/Button';

export const WalletRow = ({name, value, coin, openModal, setClickedCoin}) => {
    const earnings = coin.current_price * value
    const handleClick = () =>{
        
        setClickedCoin(coin)
        openModal(true)
    }
    return (
        <div className="wallet-coin-container">
            <div className="wallet-coin-row">
                <div className="wallet-coin">
                        <img src={coin.image} alt={name + " image"} />
                        <h1>{coin.name}</h1>
                        <p className="wallet-coin-symbol">{value} - {coin.symbol}</p>
                        <p>${parseFloat(earnings.toFixed(2)).toLocaleString()}</p>
                </div>
                    <Button type="button" onClick={() => handleClick()}>Buy or Sell</Button>
            </div>    
        </div>
    )
}
