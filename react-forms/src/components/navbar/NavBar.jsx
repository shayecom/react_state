import {Link} from "react-router";
import CustomLink from "../customLink/CustomLink.jsx";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className={"navbar-brand"} to={"/"}>Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <CustomLink className={"nav-link"} to={"/about"}>About</CustomLink>
                    <CustomLink className={"nav-link"} to={"/profile"}>Profile</CustomLink>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
