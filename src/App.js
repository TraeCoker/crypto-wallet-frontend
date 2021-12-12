import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css'
import Login from './components/authorization/Login';
import Signup from './components/authorization/Signup';
import MarketContainer from './components/market/MarketContainer';
import WalletContainer from './components/wallet/WalletContainer';


function App() {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/market">Market</Link>
      <Link to="/wallet">Wallet</Link>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/market" element={<MarketContainer />} />
        <Route path="/wallet" element={<WalletContainer />} />
      </Routes>
      <img src={Logo} />
    </div>
  );
}

export default App;
