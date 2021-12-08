import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { retrieveWalletChartData, renderWalletChart } from '../../redux/actions/chartActions';
import { fetchCurrentPrices } from '../../redux/actions/walletActions';
import { Chart } from '../chart/Chart.js';
import { WalletRow } from './WalletRow';

export default function WalletContainer() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const wallet = useSelector(state => state.wallet.current);
    const snapshots = useSelector(state => state.wallet.snapshots);
    const rawData = useSelector(state => state.chart.rawData);
    const coins = useSelector(state => state.coins);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (snapshots) dispatch(retrieveWalletChartData(snapshots));
        dispatch(fetchCurrentPrices());
    }, [])

    useEffect(() => {
        if (rawData.bitcoin && rawData.ethereum && rawData.tether && rawData.solana && rawData.cardano){
            dispatch(renderWalletChart(rawData, snapshots));
        }
    }, [rawData])

    if (!isLoggedIn) {
        return <Navigate from="/wallet" to="/login" />
      }

    return (
        <div className="wallet-container">
            <h1>Wallet</h1>
            <Chart />
            <ol>
                {Object.entries(wallet).map(([key, value]) => { if (key !== "id") return <li key={key}><WalletRow name={key} value={value} coin={coins.find(c => c.id === key)}/></li>  })}
            </ol>
        </div>
    )
}
