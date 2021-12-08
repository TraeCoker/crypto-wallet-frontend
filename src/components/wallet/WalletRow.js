import React from 'react'

export const WalletRow = ({name, value, coin}) => {
    return (
        <div className="wallet-coin-container">
            <div className="wallet-coin-row">
                <div className="wallet-coin">
                        <h1>{name}</h1>
                        <p>{value}</p>
                        <p>{coin.current_price}</p>
                </div>
            </div>    
        </div>
    )
}
