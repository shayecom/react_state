//
// function Child() {
//     console.log("Child component");
//
//     return (
//         <h1>Child Component</h1>
//     )
//
// }
//
// export default Child;

// Example of React.memo
import React from "react";

const Child = React.memo(() => {
    console.log("Child component");

    return (
        <h1>Child Component</h1>
    )
})
export default Child;
