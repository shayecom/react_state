import {useState} from 'react'
import './App.css'
import RegistrationForm from "./components/RegistrationForm.jsx";
import LoginForm from "./components/LoginForm.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={'container'}>
            <div className={'row'}>
                <RegistrationForm/>
                {/*<LoginForm/>*/}
            </div>
        </div>
    )
}

export default App
