import React from 'react';

import './RegisteredStudents.css';

function RegisteredStudent({data}) {

    return (
        <div className={"wrapper"}>
            {
                data.map((student) => (
                    <div key={student.id} className={'student-list'}>
                        <h2>Student name: {student.name}</h2>
                        <div className={"registration-student_course"}>
                            <p>Course Name: {student.course}</p>
                            <p>Start date: {student.startDate}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default RegisteredStudent;
