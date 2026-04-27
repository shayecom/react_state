import {useState} from 'react';
import './StudentForm.css'
import Loader from "./loader/Loader.jsx";

function StudentForm({saveRegisteredStudentDataHandler, onSaveStudentHandler}) {
    const [studentName, setStudentName] = useState('');
    const [course, setCourse] = useState('');
    const [startDate, setStartDate] = useState('');

    // const [isLoading, setIsLoading] = useState(false);
    // const [isSuccess, setIsSuccess] = useState(false);
    // const [isError, setIsError] = useState(false);

    const studentNameChangeHandler = (event) => {
        setStudentName(event.target.value);
    }
    const courseChangeHandler = (event) => {
        setCourse(event.target.value);
    }
    const startDateChangeHandler = (event) => {
        setStartDate(event.target.value);
    }
    const cancelHandler = () => {
        setStudentName('');
        setCourse('');
        setStartDate('');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // setIsLoading(true);

        const studentData = {
            name: studentName,
            course: course,
            startDate: startDate
        };
        saveRegisteredStudentDataHandler(studentData);
        onSaveStudentHandler(studentData);
        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 3000)
        // setTimeout(() => {
        //     if (studentData.course === 'QA') {
        //         setIsError(false);
        //         setIsSuccess(true);
        //     } else {
        //         setIsSuccess(false);
        //         setIsError(true);
        //     }
        // }, 3000);
        setStudentName('');
        setCourse('');
        setStartDate('');
    }

    return (
        <>
            {/*{*/}
            {/*    isLoading ? <Loader/> : null*/}
            {/*}*/}
            <form className={'student-form'}>

                {/*{*/}
                {/*    isSuccess ? <p className={"success"}>Success!</p> : null*/}
                {/*}*/}
                {/*{*/}
                {/*    isError ? <p className={"error"}>Error!</p> : null*/}
                {/*}*/}
                <div className={'form-control'}>
                    <label htmlFor={'name'}>Student name</label>
                    <input value={studentName} name={'name'} type={'text'} id={'name'} required
                           onChange={studentNameChangeHandler}/>
                </div>
                <div className={'form-control'}>
                    <label htmlFor={'course'}>Course Name:</label>
                    <select name={'course'} id={'course'} defaultValue={course} required onChange={courseChangeHandler}>
                        <option value={''} disabled>Select a course</option>
                        <option value={'fullstack'}>Fullstack course</option>
                        <option value={'QA'}>QA course</option>
                        <option value={'Cyber'}>Cyber course</option>
                        <option value={'Product'}>Product management course</option>
                    </select>
                </div>
                <div className={'form-control'}>
                    <label htmlFor={'date'}>Course start date</label>
                    <input value={startDate} type={'date'} name={'date'} id={'date'} required
                           onChange={startDateChangeHandler}/>
                </div>
                <div className={'actions-buttons'}>
                    <button type={'button'} onClick={cancelHandler}>Cancel</button>
                    <button type={'submit'} onClick={submitHandler}>Register new student</button>
                </div>
            </form>
        </>
    )
}

export default StudentForm
