import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { retrieveWalletChartData, renderWalletChart } from '../../redux/actions/chartActions';
import { fetchCurrentPrices } from '../../redux/actions/walletActions';
import { Chart } from '../chart/Chart.js';
import { WalletRow } from './WalletRow';
import { Modal } from '../modal/Modal';
import { WalletForm } from './WalletForm';
import './WalletContainer.css'

export default function WalletContainer() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const wallet = useSelector(state => state.wallet.current);
    const snapshots = useSelector(state => state.wallet.snapshots);
    const rawData = useSelector(state => state.chart.rawData);
    const coins = useSelector(state => state.coins);
    const userName = useSelector(state => state.user.currentUser.name)
    const [showModal, setShowModal] = useState(false);
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
            <div className="chart-container">
            <h1>Investment Earnings Over Time</h1>
                <Chart />
            </div>
            <div className="modal-container">
            <Modal show={showModal} handleClose={setShowModal} >
                <WalletForm/>
            </Modal>
            </div>
            <div className="wallet">
            <h1>{userName}'s Wallet</h1>
                {Object.entries(wallet).map(([key, value]) => {
                     if (key !== "id"){ 
                         return <WalletRow key={key} 
                                           name={key} 
                                           value={value} 
                                           coin={coins.find(c => c.id === key)} 
                                           openModal={setShowModal} />  
                        }
                    })
                }
            </div>
        </div>
    )
}
