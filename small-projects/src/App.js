import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./components/Todo";
import Coin from "./components/Coin";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/reactjs/" element={<Home />} />
                <Route path="/reactjs/todo" element={<Todo />} />
                <Route path="/reactjs/coin" element={<Coin />} />
            </Routes>
        </Router>
    );
}

export default App;
