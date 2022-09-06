import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Hola</h2>
      <Routes>
        <Route path="/" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
