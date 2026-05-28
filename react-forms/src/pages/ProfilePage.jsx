import {useNavigate} from "react-router";
import {useAuth} from "../context/AuthProvider.jsx";

function ProfilePage() {
    const {logout} = useAuth();
    const useNav = useNavigate();
    const handleLogout = () => {
        // localStorage.removeItem("token");
        logout();
        useNav("/login");
    }

    return (
        <button onClick={handleLogout} className={'btn btn-primary'}>Logout</button>
    );
}

export default ProfilePage;
