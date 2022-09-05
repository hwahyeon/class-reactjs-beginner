import { useState, useEffect } from "react";

// Cleanup function

// function Hello() {
//     useEffect(()=>{
//         console.log("created");
//         return () => console.log("distroyed");
//     }, []);
//     return <h1>Hello</h1>;
// }

function Hello() {
    function byFn () {
        console.log("distroyed");
    }
    function hiFn(){
        console.log("created");
        return byFn;
    }
    useEffect(effectFn, []);
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
}

export default App;