import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { retrieveWalletChartData, renderWalletChart } from '../../redux/actions/chartActions';
import { Chart } from '../chart/Chart.js';
import { WalletRow } from './WalletRow';
import { ModalComp } from '../modal/ModalComp';
import { WalletForm } from './WalletForm';
import { NavBar } from '../navigation/NavBar';
import './WalletContainer.css';

export default function WalletContainer() {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const wallet = useSelector(state => state.wallet.current);
    const snapshots = useSelector(state => state.wallet.snapshots);
    const rawData = useSelector(state => state.chart.rawData);
    const coins = useSelector(state => state.coins);
    const error = useSelector(state => state.coins.fetch_error);
    const userName = useSelector(state => state.user.currentUser.name);
    const [showModal, setShowModal] = useState(false);
    const [clickedCoin, setClickedCoin] = useState('');
    const dispatch = useDispatch();
    
    
    
    useEffect(() => {
        if (snapshots) dispatch(retrieveWalletChartData(snapshots));
    }, []);

    useEffect(() => {
        if (rawData.bitcoin && rawData.ethereum && rawData.tether && rawData.solana && rawData.cardano){
            dispatch(renderWalletChart(rawData, snapshots, coins));
        }
    }, [rawData]);

    
    if (!isLoggedIn) {
        return <Navigate from="/wallet" to="/login" />
    };
    
    if (error) {
        return <Navigate from="/wallet" to="/" />
    };

    return (
      <>
        <NavBar />
        <div className="wallet-container bg-dark">
            <div className="chart-container">
            <h1>Investment Earnings Over Time</h1>
                <Chart />
            </div>
            <div className="modal-container">
            <ModalComp show={showModal} handleClose={setShowModal} >
                <div className="wallet-form">
                <WalletForm clickedCoin={clickedCoin} 
                            wallet={wallet} 
                            handleClose={setShowModal}
                            coins={coins} />
                </div>
            </ModalComp>
            </div>
            <div className="wallet">
            <h1>{userName}'s Wallet</h1>
                {Object.entries(wallet).map(([key, value]) => {
                     if (key !== "id" && key !== "snapshots"){ 
                         return <WalletRow key={key} 
                                           name={key} 
                                           coin={coins.find(c => c.id === key)} 
                                           value={value} 
                                           openModal={setShowModal}
                                           setClickedCoin={setClickedCoin} />  
                        }
                    })
                }
            </div>
        </div>
      </>
    );
};
