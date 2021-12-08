import React from 'react'

export const WalletRow = ({name, value, coin}) => {
    const earnings = coin.current_price * value
    return (
        <div className="wallet-coin-container">
            <div className="wallet-coin-row">
                <div className="wallet-coin">
                        <h1>{coin.name}</h1>
                        <img src={coin.image} alt={name + " image"} />
                        <p>amount: {value} - {coin.symbol}</p>
                        <p>${parseFloat(earnings.toFixed(2)).toLocaleString()}</p>
                        <p>current market price: {coin.current_price.toLocaleString()}</p>
                </div>
            </div>    
        </div>
    )
}
