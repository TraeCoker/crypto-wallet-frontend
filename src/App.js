import { Route, Routes } from 'react-router';
import Login from './components/authorization/Login';
import Logout from './components/authorization/Logout';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentPrices } from './redux/actions/walletActions';
import Signup from './components/authorization/Signup';
import { HomePage } from './components/home/HomePage';
import { Navigate } from 'react-router';
import MarketContainer from './components/market/MarketContainer';
import WalletContainer from './components/wallet/WalletContainer';
import './App.css'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentPrices());
  }, []);

 
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/market" element={<MarketContainer />} />
        <Route path="/wallet" element={<WalletContainer />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default App;
