import { Button} from 'react-bootstrap';
import { logoutUser } from '../../redux/actions/userActions';
import { Navigate, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import './auth.css';

export default function Logout(){
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(logoutUser())
        navigate("/login")
    }

    if (!isLoggedIn) {
        return <Navigate from="/logout" to="/login" />
      }

    return (
        <div>
            <Button onClick={() => handleClick()}>
                Logout
            </Button>
        </div>
    )
}
