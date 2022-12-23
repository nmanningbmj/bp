import "./App.css";
import Data from "./data/Data";
import Topic from "./Components/topic/Topic";
import "./SCSS/main.css";
import TopicList from "./Components/topic/TopicList";
import TxAlgo from "./Components/pages/TxAlgo";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TopicList />} />
        <Route path="topic/:id" element={<Topic />} />
        <Route path="topic/6" element={<TxAlgo />} />
      </Routes>
    </div>
  );
}

export default App;
