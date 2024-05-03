import { useContext } from 'react';
import { AuthContext } from '../Component/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext); 
    const location = useLocation();
    console.log(location)
    
    if(user){
        return children; 
    }
    return (
        <Navigate state={location.pathname} to='/login'>
                
        </Navigate>
    );
};

export default PrivateRouter;