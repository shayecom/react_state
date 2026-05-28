import {useState, useEffect, useRef} from "react";
import {apiRequest} from "../lib/axiosInstance.js";
import {useNavigate} from "react-router";


const USR_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

function RegistrationForm() {
    const useNav = useNavigate();
    // const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [validUsername, setValidUsername] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // Use Ref example
    const userNameRef = useRef();

    useEffect(() => {
        userNameRef.current.focus();
    }, [])

    const handleUsernameChange = (event) => {
        const value = event.target.value;
        setUsername(value);
        setValidUsername(USR_REGEX.test(value));
    }

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setPassword(password);
        setValidPassword(PWD_REGEX.test(password));
    }

    const handleConfirmPassword = (event) => {
        const confirmPassword = event.target.value;
        setConfirmPassword(confirmPassword);
        console.log("confirm password confirmPassword: ", confirmPassword);
        console.log("password value: ", password);
        setValidConfirmPassword(confirmPassword === password);
    }

    const isValidForm = validUsername && validPassword && validConfirmPassword;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log("Form submitted");
        try {
            const response = await apiRequest({
                method: 'POST',
                path: '/api/public/user/save',
                data: {
                    username: username,
                    password: password,
                }
            })
            console.log(response);
            useNav('/login');
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className={'container'}>
            {isLoading && <p>Loading...</p>}
            <h4>Registration Form</h4>
            <form onSubmit={handleSubmit}>
                <div className="col-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input ref={userNameRef} type="text" id="username"
                           className="form-control" autoComplete={"off"} value={username}
                           onChange={handleUsernameChange}/>
                    {username && !validUsername &&
                        <p className="text-danger">Username must start with a letter and be 4-24 characters.</p>}
                </div>
                <div className="col-3">
                    {/*<button type={"button"} className="btn btn-secondary"*/}
                    {/*        onClick={() => setShowPassword(!showPassword)}>*/}
                    {/*    {showPassword ? "Hide" : "Show"} password*/}
                    {/*</button>*/}
                    {/*<input type={showPassword ? "text" : "password"} id="inputPassword5" className="form-control"*/}
                    {/*       aria-describedby="passwordHelpBlock"/>*/}
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control"
                           aria-describedby="passwordHelpBlock" value={password}
                           onChange={handlePasswordChange}/>
                    {
                        password && !validPassword && (
                            <p className={"error"}>
                                Your password must be 8-24 characters long, contain at least 1 uppercase,at least 1
                                lowercase,
                                at least 1 special and numbers ,
                                and must not contain
                                spaces or emoji.
                            </p>
                        )
                    }
                    {/*<div id="passwordHelpBlock" className="form-text">*/}
                    {/*    Your password must be 8-24 characters long, contain at least 1 uppercase,at least 1 lowercase,*/}
                    {/*    at least 1 special and numbers ,*/}
                    {/*    and must not contain*/}
                    {/*    spaces or emoji.*/}
                    {/*</div>*/}
                </div>
                <div className="col-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="form-control"
                           aria-describedby="passwordHelpBlock" value={confirmPassword}
                           onChange={handleConfirmPassword}/>
                </div>
                <div className="col mt-3">
                    <button disabled={!isValidForm} type="submit" className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;
