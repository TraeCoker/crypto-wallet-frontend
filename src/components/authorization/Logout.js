import { Button} from 'react-bootstrap';
import { logoutUser } from '../../redux/actions/userActions';
import { Navigate, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar } from '../navigation/NavBar';
import './auth.css';

export default function Logout(){
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(logoutUser())
        navigate("/login")
    };

    if (!isLoggedIn) {
        return <Navigate from="/logout" to="/login" />
    };

    return (
        <>
          <NavBar />
            <div className="login-form">
                <h1>Are you sure you want to Logout?</h1>
                <Button onClick={() => handleClick()}>
                    Logout
                </Button>
            </div>
        </>
    );
};
