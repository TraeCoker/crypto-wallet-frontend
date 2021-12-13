import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Login from './components/authorization/Login';
import Signup from './components/authorization/Signup';
import { HomePage } from './components/home/HomePage';
import MarketContainer from './components/market/MarketContainer';
import WalletContainer from './components/wallet/WalletContainer';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/market" element={<MarketContainer />} />
        <Route path="/wallet" element={<WalletContainer />} />
      </Routes>
    </div>
  );
}

export default App;
