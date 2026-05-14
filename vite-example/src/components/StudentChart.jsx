function StudentChart(props) {
    return (
        <div className={'bg-primary bg-opacity-25 rounded-3 py-3 mb-3'}>
            <div className={'row text-center'}>
                {props.courses.map((course) => {
                    return <div className={'col'} key={course.id}>
                        <div className={'mx-auto border border-dark rounded-3 d-flex align-items-end'}>
                            {course.name}
                        </div>
                    </div>
                })
                })
            </div>
        </div>
    )
}

export default StudentChart
