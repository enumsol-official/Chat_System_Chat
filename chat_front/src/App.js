import { Routes, Route } from "react-router-dom";
import Chats from "./components/Chats";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" exact element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
