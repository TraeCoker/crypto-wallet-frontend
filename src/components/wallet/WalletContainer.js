import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

export default function WalletContainer() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate from="/wallet" to="/login" />
      }

    return (
        <div>
            <h1>Wallet</h1>
        </div>
    )
}
