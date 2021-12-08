import React from 'react'

export const WalletRow = ({name, value}) => {
    return (
        <div className="wallet-coin-container">
            <div className="wallet-coin-row">
                <div className="wallet-coin">
                        <h1>{name}</h1>
                        <p>{value}</p>
                </div>
            </div>    
        </div>
    )
}
