import jwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "./context";
import AuthStorage from "./storage"
export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext);
    
    const logOut = () => {
        setUser(null);
        AuthStorage.removeToken();
    }

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        AuthStorage.storeToken(authToken);
    }

    

  return { user, setUser, logOut, logIn };
};
