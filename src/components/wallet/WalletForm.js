import { useState } from "react"

export const WalletForm = ({clickedCoin}) => {
    const [amount, setAmount] = useState('')
    const handleChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)){
            setAmount(e.target.value)
        }
    }

    return (
        <div className="wallet-form">
            <form>
                <label>
                    <h1>Buy {clickedCoin}</h1>
                    <input type="text" value={amount} onChange={ e => handleChange(e)}/>
                </label>
                <div>
                    <button type="submit">Buy</button>
                </div>
            </form>
        </div>
    )
}

