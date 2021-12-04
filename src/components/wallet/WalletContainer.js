import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { Chart } from '../chart/Chart.tsx'

export default function WalletContainer() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const wallet = useSelector(state => state.user.currentUser.wallet)

    if (!isLoggedIn) {
        return <Navigate from="/wallet" to="/login" />
      }

    return (
        <div>
    
            <h1>Wallet</h1>
            <Chart />
            <ol>
                {Object.entries(wallet).map(([key, value]) => { if (key !== "id") return <li key={key}>{key} - {value}</li>  })}
            </ol>
           
        
        </div>
    )
}
