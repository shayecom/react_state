import {useState} from 'react';
import './StudentForm.css'
import Loader from "./loader/Loader.jsx";

function StudentForm(props) {
    const [studentName, setStudentName] = useState('');
    const [course, setCourse] = useState('');
    const [startDate, setStartDate] = useState('');
    const [errors, setErrors] = useState({
        studentName: '',
        courseName: '',
        startDate: '',
    });
    const studentNameChangeHandler = (event) => {
        if (event.target.value.trim() !== '') {
            setErrors({
                ...errors,
                studentName: '',
            })
        } else {
            setErrors({
                ...errors,
                studentName: 'Student name is required',
            })
        }
        setStudentName(event.target.value);
    }
    const courseChangeHandler = (event, courses) => {
        if (event.target.value === '') {
            setErrors({
                ...errors,
                courseName: 'Course name is required',
                startDate: 'Start date is required',
            })
        } else {
            setErrors({
                ...errors,
                courseName: '',
                startDate: '',
            });
        }
        setCourse(event.target.value);
        const course = courses.find((course) => course.id === Number(event.target.value));
        setStartDate(course.startDate);
    }
    const startDateChangeHandler = (event) => {
        if (event.target.value === '') {
            setErrors({
                ...errors,
                startDate: 'Course start date is required',
            })
        } else setErrors(
            {
                ...errors,
                startDate: '',
            }
        )
        setStartDate(event.target.value);
    }
    const cancelHandler = () => {
        setStudentName('');
        setCourse('');
        setStartDate('');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let flag = 0;
        let errors = {
            studentName: '',
            courseName: '',
            startDate: '',
        }
        if (studentName.trim() === '') {
            errors.studentName = 'Student name is required';
            flag++;
        }
        if (course === '') {
            errors.courseName = 'Course name is required';
            flag++;
        }
        if (startDate === '') {
            errors.startDate = 'Course start date is required';
            flag++;
        }
        if (flag) {
            setErrors(errors);
            return;
        }
        const fullName = studentName.split(" ");

        const studentData = {
            firstName: fullName[0],
            lastName: fullName[1],
            courseId: course,
        };
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
                           id={'name'}
                           onChange={studentNameChangeHandler}/>
                    {errors.studentName && <p className={'text-danger'}>{errors.studentName}</p>}
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label fw-bold'} htmlFor={'course'}>Course Name:</label>
                    <select className={'form-select text-center'} name={'course'} id={'course'}
                            value={course}
                            onChange={(event) => {
                                courseChangeHandler(event, props.courses)
                            }}>
                        <option value={''} disabled>Select a course</option>
                        {
                            props.courses.map((course) => (
                                <option key={course.id} value={course.id}>{course.name}</option>
                            ))
                        }
                    </select>
                    {errors.courseName && <p className={'text-danger'}>{errors.courseName}</p>}
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label fw-bold'} htmlFor={'date'}>Course start date</label>
                    <input className={'form-control text-center'} value={startDate} type={'date'} name={'date'}
                           id={'date'}
                           onChange={startDateChangeHandler}/>
                    {errors.startDate && <p className={'text-danger'}>{errors.startDate}</p>}
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
