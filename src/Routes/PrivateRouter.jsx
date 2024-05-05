import { useContext } from 'react';
import { AuthContext } from '../Component/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { RotateLoader } from 'react-spinners';

const PrivateRouter = ({children}) => {

    const {user, isLoading} = useContext(AuthContext); 
    const location = useLocation();
    if(isLoading){
       return <div className="flex justify-center items-center h-screen"><RotateLoader color="black" /></div>

    }
    
    if(user){
    // <div className="flex justify-center items-center h-screen"><RotateLoader color="black" /></div>

        return children; 
    }
    return (
        <Navigate state={location.pathname} to='/login'>
                
        </Navigate>
    );
};

export default PrivateRouter;