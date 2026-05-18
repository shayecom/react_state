import './App.css'
import Child from "./components/Child.jsx";
import {useCallback, useState} from "react";
import UseCallBackExample from "./components/UseCallBackExample.jsx";
import useCounter from "./hooks/useCounter.js";
import FormExample from "./components/FormExample.jsx";

function App() {
    // const [count, setCount] = useState(0);
    const {count, increase} = useCounter();
    const sayHello = useCallback(() => {
        console.log("Hello");

    }, []);
    // const increase = () => {
    //     setCount(count + 1);
    // }
    return (
        <>
            <FormExample/>
            {/*<h1>Parent component</h1>*/}
            {/*<button onClick={increase}>Click me</button>*/}
            {/*<p>Count: {count}</p>*/}
            {/*<Child/>*/}
            {/*<UseCallBackExample onHello={sayHello}/>*/}
        </>
    )
}

export default App
