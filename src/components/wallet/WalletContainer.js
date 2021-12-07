import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { retrieveWalletChartData, renderRawData } from '../../redux/actions/chartActions';
import { Chart } from '../chart/Chart.tsx';

export default function WalletContainer() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const wallet = useSelector(state => state.user.currentUser.wallet);
    const snapshots = useSelector(state => state.user.currentUser.snapshots);
    const rawData = useSelector(state => state.chart.rawData);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(retrieveWalletChartData(snapshots));
    }, [])

    useEffect(() => {
        if (rawData.bitcoin && rawData.ethereum && rawData.tether && rawData.solana && rawData.cardano){
            renderRawData(rawData);
        }
    }, [rawData])

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
