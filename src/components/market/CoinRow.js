import React from 'react'

export const CoinRow = ({name, price, symbol, image, marketcap, priceChange}) => {
    return (
        <div>
            <li>{name} - {symbol} - {price}</li>
        </div>
    )
}
