import MainTable from "./Table/MainTable.jsx";


function AnotherTable() {
    const data = [
        {id: 1, name: "John"},
        {id: 2, name: "Jane"},
    ]
    return (
        <div>
            <h1>Another Table</h1>
            <MainTable data={data}/>
        </div>
    )
}

export default AnotherTable;
