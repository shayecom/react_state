import {useState} from "react";
import {apiRequest} from "../lib/axiosInstance.js";
import {useNavigate} from "react-router";
import {useAuth} from "../context/AuthProvider.jsx";
import CustomLink from "./customLink/CustomLink.jsx";

function LoginForm() {
    const useNav = useNavigate();
    const {login} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleUsernameChange = (event) => {
        const value = event.target.value;
        setUsername(value);
        setIsValid(value.length > 3);
    }

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setPassword(password);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log("Form submitted");
        try {
            const response = await apiRequest({
                method: 'POST',
                path: '/api/public/user/login',
                data: {
                    username: username,
                    password: password,
                }
            })
            if (response.token) {
                // localStorage.setItem("token", response.token);
                login(response.token);
                // useNav('/profile');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }

    }
    return (
        <div className={'container'}>
            {isLoading && <p>Loading...</p>}
            <h4>Sign In</h4>
            <form onSubmit={handleSubmit}>
                <div className="col-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id="username" className="form-control" onChange={handleUsernameChange}/>
                </div>
                <div className="col-3">
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input onChange={handlePasswordChange} type="password" id="inputPassword5" className="form-control"
                           aria-describedby="passwordHelpBlock"/>
                </div>
                <div className="col mt-3">
                    <button disabled={!isValid} type="submit" className="btn btn-primary">Sign In</button>
                </div>
            </form>
            <CustomLink to={"/register"}>Don't have an account? Register</CustomLink>
        </div>
    )
}

export default LoginForm;
