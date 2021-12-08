import React from 'react'
import './WalletRow.css'

export const WalletRow = ({name, value, coin}) => {
    const earnings = coin.current_price * value
    return (
        <div className="wallet-coin-container">
            <div className="wallet-coin-row">
                <div className="wallet-coin">
                        <img src={coin.image} alt={name + " image"} />
                        <h1>{coin.name}</h1>
                        <p className="wallet-coin-symbol">{value} - {coin.symbol}</p>
                        <p>${parseFloat(earnings.toFixed(2)).toLocaleString()}</p>
                </div>
                    <button>Buy or Sell</button>
            </div>    
        </div>
    )
}
