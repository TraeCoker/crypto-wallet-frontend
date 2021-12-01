import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Login from './components/authorization/login';

function App() {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
