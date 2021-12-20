import { Button} from 'react-bootstrap';
import { logoutUser } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import './auth.css';

export default function Logout(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(logoutUser())
        navigate("/login")
    }

    return (
        <div>
            <Button onClick={() => handleClick()}>
                Logout
            </Button>
        </div>
    )
}
