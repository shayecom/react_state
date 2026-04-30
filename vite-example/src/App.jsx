import './App.css'
import NewStudent from "./components/NewStudent.jsx";
import {useState} from "react";
import RegisteredStudent from "./components/registeredStudent/RegisteredStudent.jsx";
import StudentChart from "./components/StudentChart.jsx";
import StudentFilter from "./components/StudentFilter.jsx";

const courses = [
    "Fullstack",
    "QA",
    "Cybersecurity",
    "Product management",
]

function App() {
    const [registeredStudents, setRegisteredStudents] = useState([])
    const [selectedCourse, setSelectedCourse] = useState('All');
    const [selectedAmount, setSelectedAmount] = useState("All");

    const addStudentHandler = (student) => {
        setRegisteredStudents((prevStudents) => [...prevStudents, student]);
    }
    const getCourseRegistrationAmount = (courseName) => {
        return registeredStudents.filter((student) => student.course === courseName).length;
    }
    const onCourseChangeHandler = (value) => {
        setSelectedCourse(value);
    }
    const onAmountChangeHandler = (value) => {
        setSelectedAmount(value);
    }
    const amountFilterMatch = (amount) => {
        if (selectedAmount === 'No Registration') {
            return amount = 0;
        }
        if (selectedAmount === '1 - 10 Registration') {
            return amount >= 1 && amount <= 10;
        }
        if (selectedAmount === '10 - 30 Registration') {
            return amount >= 10 && amount <= 30;
        }
        return true;
    }
    let filteredStudents = registeredStudents;
    if (selectedCourse !== 'All') {
        filteredStudents = filteredStudents.filter((student) => {
            return student.course === selectedCourse;
        })
    }
    if (selectedAmount !== 'All') {

        filteredStudents = filteredStudents.filter((student) => {
            let amount = getCourseRegistrationAmount(student.course);
            return amountFilterMatch(amount);
        });
    }

    return (
        <div>
            <section className={'big-info bg-opacity-50 py-4'}>
                <div className={'container d-flex justify-content-center'}>
                    <NewStudent onAddStudent={addStudentHandler} courses={courses}/>
                </div>
            </section>
            <section className={'bg-dark text-white py-4 min-vh-100'}>
                <div className={'container-fluid'}>

                    <StudentChart courses={courses}/>

                    <StudentFilter courses={courses}
                                   selectedCourse={selectedCourse}
                                   selectedAmount={selectedAmount}
                                   courseChangeHandler={onCourseChangeHandler}
                                   amountChangeHandler={onAmountChangeHandler}
                    />

                    <RegisteredStudent data={filteredStudents}/>
                </div>
            </section>
        </div>
    )
}

export default App
