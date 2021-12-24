import './CoinRow.css';

export const CoinRow = ({name, price, symbol, rank, image, volume, marketcap, priceChange}) => {

    return (
        <div className="coin-container">
          <div className="coin-row" >
            <div className="coin">
                <img src={image} alt={name + " image"} />
                <h1>{name}</h1>
                <p className="coin-symbol">{symbol}</p>
                <p className="coin-rank"># {rank}</p>
            </div>
            <div className="coin-metrics">
                <p className="coin-price">${price.toLocaleString()}</p>
                <p className="coin-volume">Vol: ${volume.toLocaleString()}</p>

                {priceChange < 0 ? (
                    <p className="coin-price-change red">{priceChange ? priceChange.toFixed(2) : 0 }%</p>
                ) : (
                    <p className="coin-price-change green">{priceChange ? priceChange.toFixed(2): 0 }%</p>
                )}
            
                <p className="coin-market-cap">Mkt Cap: ${marketcap.toLocaleString()}</p>
            </div>
          </div>
        </div>
    );
};
