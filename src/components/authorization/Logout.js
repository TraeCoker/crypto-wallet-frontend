import { Button} from 'react-bootstrap';
import { logoutUser } from '../../redux/actions/userActions';

import './auth.css';

export const Logout = () => {
    const handleClick = () =>{
        logoutUser();

    }
    return (
        <div>
            <Button onClick={() => logoutUser()}>
                Logout
            </Button>
        </div>
    )
}
