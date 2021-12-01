import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function MarketContainer() {
    const coins = useSelector(state => state.coins)
    return (
        <div>
            <h1>Market</h1>
        </div>
    )
}
