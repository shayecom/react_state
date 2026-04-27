import './App.css'
import NewStudent from "./components/NewStudent.jsx";
import {useState} from "react";
import RegisteredStudent from "./components/registeredStudent/RegisteredStudent.jsx";

function App() {
    const [registeredStudents, setRegisteredStudents] = useState([])
    const addStudentHandler = (student) => {
        setRegisteredStudents((prevStudents) => [...prevStudents, student]);
    }
    return (
        <>
            <NewStudent onAddStudent={addStudentHandler}/>
            <RegisteredStudent data={registeredStudents}/>
        </>
    )
}

export default App
