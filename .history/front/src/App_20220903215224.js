import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Hola</h2>
      <Routes>
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
