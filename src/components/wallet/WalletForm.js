

export const WalletForm = ({clickedCoin}) => {

    return (
        <div className="wallet-form">
            <form>
                <label>
                    <h1>Buy {clickedCoin}</h1>
                    <input type="text"/>
                </label>
                <div>
                    <button type="submit">Buy</button>
                </div>
            </form>
        </div>
    )
}

