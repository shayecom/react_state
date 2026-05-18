import useCounter from "../hooks/useCounter.js";

function UseCallBackExample(props) {
    const {count, increase} = useCounter();

    return (
        <>
            <button onClick={props.onHello}>Click me</button>
            <button onClick={increase}>Click me</button>
            <p>{count}</p>
            <h3>Use callback example</h3>
        </>
    )

}

export default UseCallBackExample
