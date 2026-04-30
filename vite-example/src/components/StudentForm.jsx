import {useState} from 'react';
import './StudentForm.css'
import Loader from "./loader/Loader.jsx";

function StudentForm(props) {
    const [studentName, setStudentName] = useState('');
    const [course, setCourse] = useState('');
    const [startDate, setStartDate] = useState('');

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

        const studentData = {
            name: studentName,
            course: course,
            startDate: startDate
        };
        // saveRegisteredStudentDataHandler(studentData);
        props.onSaveStudentHandler(studentData);

        setStudentName('');
        setCourse('');
        setStartDate('');
    }

    return (
        <>
            <form onSubmit={submitHandler} className={'text-center'}>
                <div className={'mb-2'}>
                    <label className={'form-label fw-bold'} htmlFor={'name'}>Student name</label>
                    <input className={'form-control text-center'} value={studentName} name={'name'} type={'text'}
                           id={'name'} required
                           onChange={studentNameChangeHandler}/>
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label fw-bold'} htmlFor={'course'}>Course Name:</label>
                    <select className={'form-select text-center'} name={'course'} id={'course'} defaultValue={course}
                            required onChange={courseChangeHandler}>
                        <option value={''} disabled>Select a course</option>
                        {
                            props.courses.map((course) => (
                                <option key={course} value={course}>{course}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label fw-bold'} htmlFor={'date'}>Course start date</label>
                    <input className={'form-control text-center'} value={startDate} type={'date'} name={'date'}
                           id={'date'} required
                           onChange={startDateChangeHandler}/>
                </div>
                <div className={'actions-buttons'}>
                    <button className={'btn btn-secondary bg-opacity-50 px-4 m-2'} type={'button'}
                            onClick={cancelHandler}>Cancel
                    </button>
                    <button className={'btn btn-secondary bg-opacity-50 px-4'} type={'submit'}>Register new student
                    </button>
                </div>
            </form>
        </>
    )
}

export default StudentForm
