function StudentFilter(props) {
    const courseFilterHandler = (event) => {
        props.courseChangeHandler(event.target.value);
    }
    const amountFilterHandler = (event) => {
        props.amountChangeHandler(event.target.value);
    }
    return (
        <div className={'mb-3'}>
            <div className={'row align-items-center mb-3'}>
                <div className={'col-md-6'}>
                    <label className={'fw-bold'}>Filter by Course Name</label>
                </div>
                <div className={'col-md-6'}>
                    <select value={props.selectedCourse} className={'form-select text-center fw-bold'}
                            onChange={courseFilterHandler}>
                        <option value={'All'}>All</option>
                        {
                            props.courses.map((course) => (
                                <option key={course} value={course}>{course}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className={'row align-items-center mb-3'}>
                <div className={'col-md-6'}>
                    <label className={'fw-bold'}>Filter by Amount</label>
                </div>
                <div className={'col-md-6'}>
                    <select className={'form-select text-center fw-bold'} onChange={amountFilterHandler}
                            value={props.selectedAmount}>
                        <option value={'All'}>All</option>
                        <option value={'No Registration'}>No Registration</option>
                        <option value={'1 - 10 Registration'}>1 -10 Registration</option>
                        <option value={'10 - 30 Registration'}>10 -30 Registration</option>
                        <option value={'Above 30 Registrations'}>Above 30 Registrations</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default StudentFilter;
