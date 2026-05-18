import {useState, useEffect, useRef} from "react";


const USR_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

function RegistrationForm() {
    // const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // Use Ref example
    const userNameRef = useRef();

    useEffect(() => {
        userNameRef.current.focus();
    }, [])

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        if (!USR_REGEX.test(username)) {
            setError("Username is invalid");
        } else {
            setError("");
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        if (!USR_REGEX.test(username)) {
            console.log("Username is invalid");
        }
    }
    return (
        <div className={'container'}>
            <h4>Registration Form</h4>
            <form onSubmit={handleSubmit}>
                <div className="col-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input ref={userNameRef} type="text" id="username"
                           className="form-control" autoComplete={"off"} value={username}
                           onChange={handleUsernameChange}/>
                    {error && <p className="text-danger">{error}</p>}
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
                           aria-describedby="passwordHelpBlock" value={password}/>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-24 characters long, contain at least 1 uppercase,at least 1 lowercase,
                        at least 1 special and numbers ,
                        and must not contain
                        spaces or emoji.
                    </div>
                </div>
                <div className="col mt-3">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;
