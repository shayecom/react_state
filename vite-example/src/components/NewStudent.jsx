import {useState} from 'react';
import StudentForm from "./StudentForm.jsx";

function NewStudent({onAddStudent}) {
    const [studentData, setStudentData] = useState({});

    const saveRegisteredStudentDataHandler = (studentData) => {
        console.log("Data from child ", studentData);
        setStudentData(studentData);
    }
    const saveStudentHandler = (studentData) => {
        const newStudentData = {
            id: Math.random().toString(),
            ...studentData
        }
        onAddStudent(newStudentData);
    }
    return (
        <>
            <StudentForm saveRegisteredStudentDataHandler={saveRegisteredStudentDataHandler}
                         onSaveStudentHandler={saveStudentHandler}
            />
        </>
    )
}

export default NewStudent
