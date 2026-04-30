import {useState} from 'react';
import Loader from "../loader/Loader.jsx";

function Example(props) {
    const [value, setValue] = useState('');
    const [isShowing, setIsShowing] = useState(false);
    const changeNameHandler = (event) => {
        console.log(props.componentProp);
        // setValue(event.target.value);
        // setValue((prevValue) => {
        //
        // });
    }
    const handleDataChange = (key, value) => {
        props.setData(key, value);
    }
    // const renderHTML = () => {
    //     if (isShowing) {
    //         return (
    //             <div><h1>Showing</h1></div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //                 <h1>Hello</h1>
    //             </div>
    //         )
    //     }
    // }
    // const handleIsShowing = () => {
    //     setIsShowing(!isShowing);
    //     if (isShowing) {
    //         setIsShowing(false);
    //     } else {
    //         setIsShowing(true);
    //     }
    // }
    return (
        <>
            <form>
                <label htmlFor={'name'}>Name</label>
                <input type={'text'} id={'name'} value={props.existingStudent.name}
                    // onChange={(event) => setValue(event.target.value)}
                       onChange={(event) => handleDataChange('name', event.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input onChange={(event) => handleDataChange('email', event.target.value)} type="email" id="email"
                       value={props.existingStudent.email}/>
                <label htmlFor="age">Age</label>
                <input type={'number'} id={'age'} value={props.existingStudent.age}
                       onChange={(event) => handleDataChange('age', event.target.value)}/>
            </form>
            {/*{renderHTML()}*/}
            {/*<button onClick={() => setIsShowing(!isShowing)}>Click me to view the HTML</button>*/}
            {/*{*/}
            {/*    props.data.length > 0 ? <form>*/}
            {/*        <label htmlFor={'name'}>Name</label>*/}
            {/*        <input type={'text'} id={'name'} value={props.existingStudent.name}*/}
            {/*            // onChange={(event) => setValue(event.target.value)}*/}
            {/*               onChange={changeNameHandler}*/}
            {/*        />*/}
            {/*        <label htmlFor="email">Email</label>*/}
            {/*        <input type="email" id="email" value={props.existingStudent.email}/>*/}
            {/*    </form> : <Loader/>*/}
            {/*}*/}

        </>
    )
}

export default Example;
