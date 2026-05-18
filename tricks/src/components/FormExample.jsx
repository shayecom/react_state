import {useState} from "react";

function FormExample() {
    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log(name);
    }

    return (
        <div>
            <h1>Form Example</h1>
            <p>Name: {name}</p>
            <form onSubmit={handleSubmit}>
                <input type={"text"} placeholder={"Enter your name"} value={name}
                       onChange={handleNameChange}/>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

export default FormExample;
