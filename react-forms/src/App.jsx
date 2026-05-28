import {useState} from 'react'
import './App.css'
import NavBar from "./components/navbar/NavBar.jsx";
import {Route, Routes} from "react-router";

import {routes} from "./routes/routes.jsx";
import {useAuth} from "./context/AuthProvider.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";

function App() {
    const {isAuthenticated} = useAuth();
    return (
        <div className={'container'}>
            <NavBar/>
            <Routes>
                {/* Public Routes  */}
                <Route path={"/login"} element={<LoginForm/>}/>
                <Route path={"/register"} element={<RegistrationForm/>}/>
                {
                    isAuthenticated && (
                        routes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element}/>
                        ))
                    )
                }
                {/*<Route path={"/"} element={<HomePage/>}/>*/}
                {/*<Route path={"/about"} element={<AboutPage/>}/>*/}
                {/*<Route path={"/profile"} element={<ProfilePage/>}/>*/}
            </Routes>
            {/*<div className={'row'}>*/}
            {/*    <RegistrationForm/>*/}
            {/*    <LoginForm/>*/}
            {/*</div>*/}
        </div>
    )
}

export default App
