import './App.css'
import NewStudent from "./components/NewStudent.jsx";
import {useEffect, useState} from "react";
import RegisteredStudent from "./components/registeredStudent/RegisteredStudent.jsx";
import StudentChart from "./components/StudentChart.jsx";
import StudentFilter from "./components/StudentFilter.jsx";
import {apiRequest} from "./lib/axiosInstance.js";


function App() {
    const [registeredStudents, setRegisteredStudents] = useState([])
    const [selectedCourse, setSelectedCourse] = useState('All');
    const [selectedAmount, setSelectedAmount] = useState("All");
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses();
        getStudents();
    }, []);

    const getCourses = async () => {
        const response = await apiRequest({
            method: 'GET',
            path: '/course/all',
        });
        setCourses(response);
    }

    const getStudents = async () => {
        const response = await apiRequest({
            method: 'GET',
            path: '/student/all',
        });
        setRegisteredStudents(response);
    }

    const addStudentHandler = async (student) => {
        const response = await apiRequest({
            method: 'POST',
            path: '/student/create',
            data: student
        });
        // console.log(response);
        setRegisteredStudents((prevStudents) => [...prevStudents, response]);
    }
    const getCourseRegistrationAmount = (course) => {
        return registeredStudents.filter((student) => student.course.id === course.id).length;
    }
    const onCourseChangeHandler = (value) => {
        setSelectedCourse(value);
    }
    const onAmountChangeHandler = (value) => {
        setSelectedAmount(value);
    }
    const amountFilterMatch = (amount) => {
        if (parseInt(selectedAmount) === 0) {
            return amount = 0;
        }
        if (parseInt(selectedAmount) === 1) {
            return amount >= 1 && amount <= 10;
        }
        if (parseInt(selectedAmount) === 2) {
            return amount >= 10 && amount <= 30;
        }
        if (parseInt(selectedAmount) === 3) {
            return amount >= 30;
        }
        return true;
    }
    let filteredStudents = registeredStudents;
    if (selectedCourse !== 'All') {
        filteredStudents = filteredStudents.filter((student) => {
            return student.course.id === parseInt(selectedCourse);
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
