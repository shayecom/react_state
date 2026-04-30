import {useState} from 'react';
import StudentForm from "./StudentForm.jsx";

function NewStudent(props) {
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
        props.onAddStudent(newStudentData);
    }
    return (
        <>
            <StudentForm saveRegisteredStudentDataHandler={saveRegisteredStudentDataHandler}
                         onSaveStudentHandler={saveStudentHandler}
                         courses={props.courses}
            />
        </>
    )
}

export default NewStudent
