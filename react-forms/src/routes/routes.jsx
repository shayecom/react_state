import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import NotFoundPage from "../pages/404Page.jsx";
import LoginForm from "../components/LoginForm.jsx";
import RegistrationForm from "../components/RegistrationForm.jsx";

export const routes = [
    {
        path: '/login',
        element: <LoginForm/>,
        isPublic: true,
    },
    {
        path: '/register',
        element: <RegistrationForm/>,
        isPublic: true,
    },
    {
        path: '/',
        element: <HomePage/>,
        isPublic: false,
    },
    {
        path: '/about',
        element: <AboutPage/>,
        isPublic: false,
    },
    {
        path: '/profile',
        element: <ProfilePage/>,
        isPublic: false,
    },
    {
        path: '*',
        element: <NotFoundPage/>,
        isPublic: false,
    }
];
