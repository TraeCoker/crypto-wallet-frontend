import { useState } from "react"

export const WalletForm = ({clickedCoin}) => {
    const [amount, setAmount] = useState('')
    const handleChange = (e) => {
        const re = /^(?:0|[1-9]\d+|)?(?:.?\d{0,2})?$/;
        if (e.target.value === '' || re.test(e.target.value)){
            setAmount(e.target.value)
        }
    }

    return (
        <div className="wallet-form">
            <form>
                <label>
                    <h1>Buy {clickedCoin.name}</h1>
                    <label>$</label><input type="text" value={amount} onChange={ e => handleChange(e)}/>
                </label>
                <h1></h1>
                <div>
                    <button type="submit">Buy</button>
                </div>
            </form>
        </div>
    )
}

