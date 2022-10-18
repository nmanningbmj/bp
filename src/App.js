import "./App.css";
import Data from "./data/Data";
import Topic from "./Components/topic/Topic";
import TopicList from "./Components/topic/TopicList";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TopicList />} />
        <Route path="topic/:id" element={<Topic />} />
      </Routes>
    </div>
  );
}

export default App;
