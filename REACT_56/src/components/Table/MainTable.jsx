import TableRow from "./TableRow.jsx";

function MainTable({data}) {

    return (
        <table className={'table table-dark'}>
            <thead>
            <tr>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            <TableRow/>
            {
                data.map((data) => (
                    <tr key={data.id}>
                        <td>{data.name}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default MainTable;
