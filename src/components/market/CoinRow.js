import React from 'react'
import './CoinRow.css'

export default function CoinRow({name, price, symbol, rank, image, volume, marketcap, priceChange}) {
    return (
        <div className="coin-container">
          <div className="coin-row">
            <div className="coin">
                <img src={image} alt={name + " image"} />
                <h1>{name}</h1>
                <p className="coin-symbol">{symbol}</p>
                <p className="coin-rank"># {rank}</p>
            </div>
            <div className="coin-metrics">
                <p className="coin-price">${price}</p>
                <p className="coin-volume">Vol: ${volume.toLocaleString()}</p>

                {priceChange < 0 ? (
                    <p className="coin-price-change red">{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className="coin-price-change green">{priceChange.toFixed(2)}%</p>
                )}

                <p className="coin-market-cap">Mkt Cap: ${marketcap.toLocaleString()}</p>
            </div>
          </div>
        </div>
    );
}
