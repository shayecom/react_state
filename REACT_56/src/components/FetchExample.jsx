import {useEffect, useState} from "react";
import MainTable from "./Table/MainTable.jsx";
import {apiRequest, axiosInstance as axios} from "../services/axiosInstance.js";

function FetchExample() {
    // State
    const [data, setData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [postId, setPostId] = useState(1);
    const [count, setCount] = useState(0);

    // Side Effects
    useEffect(() => {
        // (async () => {
        //     await fetchData();
        // })();
        // awaitResponse()
        // fetchWithAxios();
        fetchPosts()
    }, [postId]);

    useEffect(() => {
        console.log(count);
    }, [count])

    // Functions
    const fetchPosts = async () => {
        try {
            const courses = await apiRequest(
                {method: 'GET', path: "/course/all"}
            )
            debugger;
            const response =
                await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            if (response.data.length === 0) {
                throw new Error("No data found");
            }
            setPostData(response.data);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }

    }
    const fetchData = () => {
        let url = new URL('https://jsonplaceholder.typicode.com');
        const params = {
            postId: 1,
        }
        for (const key in params) {
            url.searchParams.append(key, params[key]);
        }
        const response = fetch(url)
        return response.then((response) => {
                return response.json()
            }
        ).then((data) => {
            console.log(data);
            return data;
        }).catch((error) => {
            console.log(error);
        });
    }

    const awaitResponse = async () => {
        let url = new URL('https://jsonplaceholder.typicode.com/comments');
        const params = {
            postId: postId,
        }
        for (const key in params) {
            url.searchParams.append(key, params[key]);
        }
        console.log(url);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message());
            console.log(error.message());
        } finally {
            setIsLoading(false);
        }
    }

    const fetchWithAxios = async () => {
        try {
            const params = {
                postId: postId,
            }
            const response = await axios.get(axios.getUri(), {params});
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleSetCount = () => {
        setCount(count + 1);
    }
    const handlePostId = (event) => {
        setPostId(event.target.value);
    }
    // Render
    return (
        <div className={'row'}>
            {/*<div className="col">*/}
            {/*    <button onClick={handleSetCount}>Click me</button>*/}
            {/*    <p>{count}</p>*/}
            {/*</div>*/}
            <div className={'col'}>
                {
                    typeof postData === "object" ?
                        <div key={postData.id}>
                            <h2>{postData.title}</h2>
                            <p>{postData.body}</p>
                        </div> :
                        postData.length > 0 ?
                            postData.map((post) => (
                                <div key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </div>
                            )) : <p>{error}</p>
                }
            </div>
            <select onChange={handlePostId}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            {/*<button onClick={handleSetCount}>{count}</button>*/}
            <h1>Fetch Example</h1>
            {
                data.length > 0 ?
                    <MainTable data={data}/>
                    : null
            }
            {
                isLoading ? <p>Loading...</p> : null
            }
            {
                error ? <p>{error}</p> : null
            }
        </div>
    )
}

export default FetchExample;
