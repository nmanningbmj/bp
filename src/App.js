import Data from "./data/Data";
import Topic from "./components/summary/Topic";
import "./assets/SCSS/main.css";
import Header from "./layouts/navigation/navbar/Header";
import TopicList from "./components/summary/TopicList";
import TxAlgo from "./pages/TxAlgo";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TopicList />} />
        <Route path="topic/:id" element={<Topic />} />
        <Route path="topic/6" element={<TxAlgo />} />
      </Routes>
    </div>
  );
}

export default App;
