function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    }
    return (
        <div className={'container'}>
            <h4>Sign In</h4>
            <form onSubmit={handleSubmit}>
                <div className="col-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" id="username" className="form-control"/>
                </div>
                <div className="col-3">
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control"
                           aria-describedby="passwordHelpBlock"/>
                    {/*<div id="passwordHelpBlock" className="form-text">*/}
                    {/*    Your password must be 8-20 characters long, contain letters and numbers, and must not contain*/}
                    {/*    spaces, special characters, or emoji.*/}
                    {/*</div>*/}
                </div>
                <div className="col mt-3">
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
