import React from 'react';

import './RegisteredStudents.css';

function RegisteredStudent({data}) {

    return (
        <div>
            {
                data.map((student) => (
                    <div key={student.id}
                         className={'row align-items-center bg-secondary bg-opacity-50 border border-5 border-dark mb-3'}>
                        <div className={'col-md-2 fw-bold border-end border-dark'}>
                            {student.course.startDate}
                        </div>
                        <div className={'col-md-7 fw-bold fs-5'}>
                            <p>{student.firstName + " " + student.lastName}</p>
                        </div>
                        <div className={'col-md-3 fw-bold text-end'}>{student.course.name}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default RegisteredStudent;
